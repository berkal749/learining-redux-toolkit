import React from 'react'
import {  useSelector } from 'react-redux'

export default function MovieList() {
    const movies = useSelector((state:any)=>state.movie.movies)
  return (
    <div>



        {movies.map(movie=> <p>

             {movie.id}

        </p>)}
    </div>
  )
}
