import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import QuizCard from "../components/QuizCard"

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => {setQuestions(res.data.results)})
    .catch(err => {
      console.error("Error fetching quiz data:", err)
    })
  },[])

  const submitHandler = () => {
    navigate("/result", {state: {questions, answers}})
  }

  const answerHandler = (qIndex, answer) => {
    setAnswers({...answers, [qIndex]: answer})
  }

  return (
    <div className="p-6 flex flex-col gap-4 bg-pastelYellow min-h-screen">
      {questions.map((q, index) => (
        <QuizCard key={index} index={index} question={q} selectedAnswer={answers[index]} onAnswer={answerHandler} />
      ))}
      {questions.length > 0 && (
        <button onClick={submitHandler} className="mt-4 bg-pastelPink px-6 py-2 rounded hover:bg-pastelGreen transition w-fit">Submit</button>
      )}
    </div>
  )
}

export default Quiz