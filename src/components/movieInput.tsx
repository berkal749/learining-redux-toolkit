import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux"; 

export default function MovieInput() { 
    const [newMovie, setNewMovie] = useState<string>(""); 
    
    const dispatch = useDispatch(); 
    function setMovieHandler() { 
        if(newMovie) {
            dispatch(addMovie(newMovie)); 
            setNewMovie("");
        }
    }

    return ( 
        <div>
            <input 
                type="text" 
                value={newMovie} 
                onChange={(e) => setNewMovie(e.target.value)} 
                placeholder="Enter movie name"
                
            />
            <button onClick={()=>setMovieHandler()}>
                Add Movie
            </button>
        </div>
    );
}