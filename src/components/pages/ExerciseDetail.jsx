import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import Detail from "../ExerciseDetail/Detail"
import ExerciseVideos from "../ExerciseDetail/ExerciseVideos"
import SimilarExercises from "../ExerciseDetail/SimilarExercises"
import { useParams } from "react-router-dom"
import { exerciseOptions, fetchData } from "../../utils/fetchData"

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {

    const fetchExerciseDetail = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      setExerciseDetail(exerciseDetailData)
    }

    fetchExerciseDetail()

  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
