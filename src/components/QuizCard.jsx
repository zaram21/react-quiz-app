import React, { useMemo } from 'react'

function QuizCard({index, question, selectedAnswer, onAnswer}) {
  if (!question || !Array.isArray(question.incorrect_answers))return null

  const answers = useMemo(() => {
    const incorrect = Array.isArray(question?.incorrect_answers) ? question.incorrect_answers : [];
    const correct = question?.correct_answer ? [question.correct_answer] : [];
    return [...incorrect, ...correct];
  }, [question])
  const shuffled = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5)
  }, [answers])

  return (
    <div>
      <h2 className='font-semibold' dangerouslySetInnerHTML={{__html: `${index+1}. ${question.question}`}}/>
      <div>
        {shuffled.map((ans, i) => (
          <button key={i} onClick={() => onAnswer(index, ans)} className={`px-4 py-2 rounded border transition ${selectedAnswer === ans ? 'bg-pastelBlue text-white' : 'bg-pastelGreen hover:bg-pastelPink'}`} dangerouslySetInnerHTML={{__html: ans}}/>
        ))}
      </div>
    </div>
  )
}

export default QuizCard