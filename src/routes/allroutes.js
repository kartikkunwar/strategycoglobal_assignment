import { Route, Routes } from "react-router-dom"
import { SearchMovies } from "../components/search"
import { SingleMovie } from "../components/single"



export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<SearchMovies/>}/>
            <Route path="/:id" element={<SingleMovie/>} />
        </Routes>
    )
}