import YouTube from 'react-youtube'
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import { baseURL } from '../base/axios';
import { response } from '../base/res';

export const Films=({ title, movie_request, isLargeRow })=>{
    const [movies,setMovies]=useState([]);
    const [trailer,setTrailer]=useState("");

    useEffect(()=>{
        const fetchData=async()=>{
            const resData=await baseURL.get(movie_request)
            setMovies(resData.data.results.slice(0,6));
        }
        fetchData();
    },[movie_request])

    const fetchTrailer=async(movie)=>{
        await baseURL.get("/movie/"+movie?.id.toString()+response.trailerQuery)
        .then(resData=>{
            setTrailer(resData.data.results[0]?.key)
        })
        .catch(err=>console.error(err))
    }

    const handleClick=(movie)=>{
        if(trailer){
            setTrailer("")
        }else{
            fetchTrailer(movie)
        }
    }

    const options = {
        playerVars: {
            autoplay: 1,
        },
    }

    return(
        <div className="catigories">
            <h3 className='film_title'>{title}</h3>
            <div className="films">
                {movies.map((movie) => (
                        <Tooltip title={movie?.original_name || movie?.original_title} key={movie.id}>
                            <img src={
                                `https://image.tmdb.org/t/p/original/${
                                    isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`}
                                alt={movie.original_title}
                                onClick={() => handleClick(movie)}
                                loading="lazy"
                                className={`film ${isLargeRow && "filmPosterLarge"}`}
                            />
                        </Tooltip>
                ))}
            </div>
            {trailer && <YouTube className='ytPlayer' videoId={trailer} options={options} />}

        </div>
    )
}