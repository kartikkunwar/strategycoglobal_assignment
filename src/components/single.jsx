import { Box, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ClockLoader } from "react-spinners"



export const SingleMovie = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [anim,setAmin]=useState(false)

    useEffect(() => {
        setAmin(true)
        axios.get(`https://strategy-backend-xdzy.onrender.com/${id}`)
            .then((res) => {
                setData(res.data)
                setAmin(false)
            })
            .catch(err=>console.log(err))
    }, [id])
    return (
        <Box  bgColor="black" height='100vh'>
            {
                anim&&<Box width='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'><ClockLoader
                color={'teal'}
                loading={anim}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /></Box>
            }
            <Box w='70%' m='auto'>
                <Image src={data.Poster} m='auto' />
                <Box className="main" bgColor='white'>
                    <Text className="single"><span>Title:</span> {data.Title}</Text>
                    <Text className="single"><span>Release Date:</span> {data.Released}</Text>
                    <Text className="single"><span>Plot:</span> {data.Plot}</Text>
                </Box>
            </Box>
        </Box>
    )
}