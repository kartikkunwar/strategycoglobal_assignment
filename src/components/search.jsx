import { Box, Button, Image, Input, ListItem, UnorderedList } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ClockLoader } from "react-spinners"



export const SearchMovies = () => {
    const [query, setQuery] = useState("")
    const [data, setData] = useState("")
    const [anim,setAmin]=useState(false)


    useEffect(() => {
        setAmin(true)
        if(query==""){
            axios.get("https://strategy-backend-xdzy.onrender.com/")
            .then((res) => {
                setData(res.data.Search)
                setAmin(false)
            })
            .catch((err) => console.log(err))
        }else{
            axios.get(`https://strategy-backend-xdzy.onrender.com/?q=${query}`)
            .then((res) => {
                setData(res.data.Search)
                setAmin(false)
            })
            .catch((err) => console.log(err))
        }   
    }, [query])


    return (
        <Box bgColor='black'>
            
            <Box w='30%' m='auto' color='white' pt='30px'>
                <Input placeholder="Search Movies" value={query} onChange={(e) => setQuery(e.target.value)} />
            </Box>
            {
                anim&&<Box width='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'><ClockLoader
                color={'teal'}
                loading={anim}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /></Box>
            }

            {
                !anim&&data?.length && <UnorderedList w='50%' m='auto' mt='100px' color='white'>
                    {
                        data.map((el, ind) => {
                            return (
                                <ListItem display='flex' h='150px' alignItems='center' gap='5%' key={ind} mt='30px'>
                                    <Box w='30%' h='100%'><Image src={el.Poster} h='100%' w='100%' /></Box>
                                    <Box  w='30%' ><span>{el.Title}</span></Box>
                                    <Box  w='30%' ><Button><Link to={`/${el.imdbID}`} mt='20px'>View full Details</Link></Button></Box>
                                </ListItem>
                            )
                        })
                    }
                </UnorderedList>
            }

        </Box>
    )
}