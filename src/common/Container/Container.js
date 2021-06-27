import React from 'react'
import MovieGrid from "../MovieGrid/MovieGrid"
import "./Container.css"
import Card from "../Card/Card"

const Container = (props) => {

    return (
        <div className="container">
            <div className="row">

                <div className="movies__div">
                    <MovieGrid moviesList={props.moviesData} />
                </div>

                <div className="filter__div">
                    <Card getFilterData={props.filterHandlerData} genresList={props.genresList} artistList={props.artistList} />
                </div>

            </div>
        </div>
    )
}

export default Container
