
import { useSelector } from 'react-redux'

import { removeMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export default function MovieList() {

  const dispatch = useDispatch();

  function removeHandler(targetMovie) {
    if (targetMovie) {

      dispatch(removeMovie(targetMovie));
    }
  }


  const movies = useSelector((state: any) => state.movie.movies)
  return (
    <div>

      {movies.map(movie => <p key={movie.id}>

        {movie.movie}
        <button value={movie.movie} onClick={() => (removeHandler(movie.movie))
        }>delete button</button>
      </p>
      )}

    </div>
  )
}
