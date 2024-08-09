import { Box } from "@mui/material"
import { Exercises, HeroBanner, SearchExercises } from "../../components"
import { useState } from "react"

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercises={exercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    )
}

export default Home
