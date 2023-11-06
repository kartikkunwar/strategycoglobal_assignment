import { Box, Image, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export const SearchMovies = () => {
    const [query, setQuery] = useState("")
    const [data, setData] = useState("")

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=3f8a2d27&s=${query}`)
            .then((res) => setData(res.data.Search))
            .catch((err) => console.log(err))
    }, [query])


    return (
        <Box>
            <Box w='30%' m='auto'>
                <Input placeholder="Search Movies" value={query} onChange={(e) => setQuery(e.target.value)} />
            </Box>

            {
                data?.length && <Box w='80%' m='auto' display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))' gridTemplateRows='auto' gap='20px' mt='20px' p='20px' textAlign='center'>
                    {
                        data.map((el, ind) => {
                            return (
                                <Link to={`/${el.imdbID}`} key={ind}>
                                    <Box key={ind} h='300px'>
                                        <Image src={el.Poster} h='70%' w='100%' />
                                        <Text>{el.Title}</Text>
                                        <Text>{el.Year}</Text>
                                    </Box>
                                </Link>
                            )
                        })
                    }
                </Box>
            }

        </Box>
    )
}