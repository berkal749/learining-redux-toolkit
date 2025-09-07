import { createSlice } from "@reduxjs/toolkit";
const initialState = {


    movies:[{movie:"interstaller",id:1},{movie:"lol",id:2}]
}


const movieSlice = createSlice({


name:"movie",
initialState ,
reducers:{

   addMovie:(state,action)=>{
    state.movies.push(action.payload);


   },
   removeMovie:(state,action)=>{
    state.movies.push(action.payload)


   }

}


})
export const {addMovie,removeMovie} = movieSlice.actions;
export default  movieSlice.reducer;