import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import Detail from "../ExerciseDetail/Detail"
import ExerciseVideos from "../ExerciseDetail/ExerciseVideos"
import SimilarExercises from "../ExerciseDetail/SimilarExercises"
import { useParams } from "react-router-dom"
import { exerciseOptions, fetchData, youtubeOptions } from "../../utils/fetchData"

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideo, setExerciseVideo] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()

  useEffect(() => {

    const fetchExerciseDetail = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const similarExercisesData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideo(similarExercisesData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }

    fetchExerciseDetail()

  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail
