import { useEffect, useState } from "react";
import { baseURL } from "../base/axios";
import {response} from '../base/res';

export const Banner=()=>{
    const[movie,setMovie]=useState([]);

    useEffect(()=>{
        const fetchMovie=async()=>{
            const resData= await baseURL.get(response.fetchNetflixOriginals)
            setMovie(
                resData.data.results[
                    Math.floor(Math.random() * resData.data.results.length)
                ]
            );
        }
        fetchMovie();
    },[])

    return(
        <header
        style={{ backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center center"}}
        >
            <div className="main">
                <div className="main_content">
                    <h1 className="heading">{movie.original_name}</h1>
                    <div className="buttons">
                        <button className='btn'>Play</button>
                        <button className='btn btn_two'>My List</button>
                    </div>
                    <p className="main_text">{movie.overview}</p>
                </div>
            </div>
            
        </header>
    )
}