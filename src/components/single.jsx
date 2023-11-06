import { Box, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const SingleMovie=()=>{
    const {id}=useParams()
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?apikey=3f8a2d27&i=${id}`)
        .then((res)=>setData(res.data))
    },[id])
    return(
        <Box w='70%' m='auto'>
            <Image src={data.Poster} m='auto'/>
            <Text className="single"><span>Title:</span> {data.Title}</Text>
            <Text className="single"><span>Release Date:</span> {data.Released}</Text>
            <Text className="single"><span>Plot:</span> {data.Plot}</Text>
        </Box>
    )
}