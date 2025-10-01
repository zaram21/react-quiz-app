import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const decodeHtml = (html) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value;
}

function Result() {
  const location = useLocation()
  const navigate = useNavigate()
  const {questions, answers} = location.state || {questions: [], answers: {}}

  const score = questions.reduce((acc, q, idx) => {
    return answers[idx] === q.correct_answer ? acc + 1 : acc
  }, 0)

  const total = questions.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='txt-3xl font-bold mb-6 text-center text-pastelBlue'>Quiz Results</h1>
      <div className='mb-8'>
        <p className='text-lg textlg font-semibold text-pastelGreen'>Your Score: {score} / {total} ({percentage.toFixed(0)}%)</p>
        <div className='w-full bg-pastelYellow rounded-full h-4 mt-3 overflow-hidden'>
          <div className='h-4 bg-pastelGreen transition-all duration-500' style={{width: `${percentage}%`}}></div>
        </div>
      </div>

      <ul>
        {questions.map((q, idx) => {
          const userAnswer = answers[idx]
          const isCorrect = userAnswer === q.correct_answer;
          return (
            <li key={idx} className={`mb-4 p-4 rounded-lg shadow-sm ${isCorrect ? "bg-pastelGreen" : "bg-pastelPink"}`}>
              <div className="flex items-center mb-2">
                {isCorrect ? (
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pastelGreen-dark mr-2">
                    <FaCheckCircle className="w-5 h-5 bg-pastelPink-dark" />
                  </span>
                ) : (
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pastelPink-dark mr-2">
                    <FaTimesCircle className="w-5 h-5 bg-pastelPink-dark" />
                  </span>
                  )}
                <span>{idx + 1}. {decodeHtml(q.question || "")}</span>
              </div>
            <p>
              <span>Your answer:</span>{" "}
              {userAnswer ? decodeHtml(userAnswer) : "No answer"}
            </p>
          </li>
          )
        })}
      </ul>
        <div className="text-center mt-8">
          <button onClick={() => navigate("/")} className="px-6 py-2 bg-pastelBlue text-white rounded-lg shadow hover:bg-dark transition">Try Again</button>
        </div>
    </div>

  )
}

export default Result