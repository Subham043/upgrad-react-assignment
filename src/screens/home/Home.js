import React, { useEffect, useContext } from 'react'
import Grid from '../../common/Grid/Grid'
import "./Home.css"
import Container from '../../common/Container/Container'
import { useState } from 'react'
import axios from 'axios'
import {Context} from "../../store"


const Home = ( props ) => {
    
    const [movies, setMovies] = useState([])
    const [rmovies, setRMovies] = useState([])
    const [genre, setGenre] = useState([])
    const [artist, setArtist] = useState([])
    const [viewBtn, setViewBtn] = useContext(Context);

    useEffect(() => {

        getData();
        getGenre();
        getArtist();

    }, [])

    useEffect(() => {

        setViewBtn(false)

    }, [props.match.params])


    const getData = async () => {
        await axios("http://localhost:8085/api/v1/movies")
            .then(
                (response) => {

                   
                    
                    setMovies([...response.data.movies])

                    
                    let Rmovie = response.data.movies.filter((item)=>{
                        return item.status==="RELEASED";
                    })
                    setRMovies([...Rmovie])
                    

                },
            )
            .catch(
                (error) => {
                    console.log(error)
                },
            )
    }

    const getGenre = async () => {
        await axios("http://localhost:8085/api/v1/genres")
            .then(
                (response) => {

                   
                    setGenre([...response.data.genres])
                    

                },
            )
            .catch(
                (error) => {
                    console.log(error)
                },
            )
    }

    const getArtist = async () => {
        await axios("http://localhost:8085/api/v1/artists")
            .then(
                (response) => {

                   
                    setArtist([...response.data.artists])
                    

                },
            )
            .catch(
                (error) => {
                    console.log(error)
                },
            )
    }



    const filterHandler = (data) => {
        console.log(data)
        console.log(new Date(data.dateStart))
        
        if(data.movieName!==""){
            let dataArr1 = rmovies.filter((item) => {

                return item.title.toLowerCase().includes(data.movieName.toLowerCase()) ;
    
            })
            setRMovies([...dataArr1])
        }

       
        if(data.personName.length!==0){
            let dataArr2 = data.personName.map((name)=>{
                return(
                    rmovies.filter((item) => {
                        
                        return item.genres.includes(name)
                    })
                );
                
            })
            
            setRMovies([...dataArr2[0]])
        }

        if(data.artistName.length!==0){
            let arrR = []
            data.artistName.map((name)=>{
                return(
                    rmovies.map((items) => {
                        
                        items.artists.filter((item)=>{
                            
                           if((item.first_name + " " + item.last_name) === name){
                            arrR.push(items)
                           }
                        })
                        
                    })
                );
                
            })
            
            setRMovies([...arrR])
        }

        if(data.dateStart!==null){
            let dataArr3 = rmovies.filter((item) => {

                return item.release_date === data.dateStart;
    
            })
            setRMovies([...dataArr3])
        }

        if(data.dateEnd!==null){
            let dataArr4 = rmovies.filter((item) => {

                return item.release_date === data.dateEnd;
    
            })
            setRMovies([...dataArr4])
        }

    }

    return (
        <div>
            <h2 className="heading">Upcoming Movies</h2>
            <Grid moviesData={movies} />
            <Container moviesData={rmovies} genresList={genre} artistList={artist} filterHandlerData={filterHandler} />
            
        </div>
    )
}

export default Home
