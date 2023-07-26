import React, { useEffect, useState } from 'react'
import './RowPost.css'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(res=>{
            setMovies(res.data.results)
        })
    });
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleMovie = (id)=> {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => {
            if(res.data.results.length !== 0) {
                setUrlId(res.data.results[0])
            } else {
                console.log("No video available")
            }
        });
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((x) => 
                <img onClick={()=>handleMovie(x.id)} className = {props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl + x.backdrop_path}`} alt="poster" />
            )}
        </div>
        { urlId && <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost