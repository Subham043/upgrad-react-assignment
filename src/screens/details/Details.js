import React, { useEffect, useState, useContext } from "react";
import axios from "axios"
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Details.css"
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {Context} from "../../store"



const Details = (props) => {
    
    let id = props.match.params.id;

    const [viewBtn, setViewBtn] = useContext(Context);

    const [movie, setMovie] = useState({})

    useEffect(() => {

        getMovie();

    }, [])

    useEffect(() => {

        setViewBtn(true)

    }, [id])

    const getMovie = async () => {
        await axios(`http://localhost:8085/api/v1/movies/${id}`)
            .then((response) => {
                setMovie({ ...response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

  

    let artistInfo = []

    for (var i in movie.artists) {
        artistInfo.push(movie.artists[i])
    }



    return (
        <div>
            <div>
                <Link to="/" style={{ textDecoration: "none" }}> <Button
                    className="back__btn"
                >
                    <ArrowBackIosIcon />Back To Home
                </Button></Link>
            </div>
            <div className="row">
                <div className="left">
                    <img src={movie.poster_url} alt={movie.title} />
                </div>
                <div className="middle">
                    <Typography variant="headline" component="h2">
                        {movie.title}
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Genre</span>: {movie.genres}
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Duration</span>: {movie.duration}
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Released Date</span>: {movie.release_date}
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Rating</span>: {movie.rating}
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Plot</span>: (<Link to={`${movie.wiki_url}`}>Wiki Link</Link>) {movie.storyline}
                    </Typography>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Trailer</span>:
                    </Typography>
                    <ReactPlayer
                        url={`${movie.trailer_url}`}
                    />

                </div>
                <div className="left">
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Rate this movie</span>:
                    </Typography>
                    <div>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </div>
                    <Typography component="p" gutterBottom>
                        <span style={{ fontWeight: "bold" }}>Artists</span>:
                    </Typography>

                    <GridList cellHeight={180} className="gridList">
                       
                        {artistInfo.map((tile) => (
                            <GridListTile key={tile.id}>
                                <img src={tile.profile_url} alt={tile.profile_url} />
                                <GridListTileBar
                                    title={`${tile.first_name} ${tile.last_name}`}
                                    
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default Details
