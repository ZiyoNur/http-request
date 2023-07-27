import React from "react";
import classes from './MoviesList.module.css';
import Movie from "./Movie";


const MoviesList = props => {

    return(
        <ul className={classes["movies-list"]}>
            {props.movies.map((mov, index) => (
                <Movie 
                    key={index}
                    id={mov.id}
                    title={mov.title}
                    releaseDate={mov.releaseDate}
                    openingText={mov.openingText}
                />
            ))}
        </ul>
        )
};

export default MoviesList;