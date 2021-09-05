import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default function QuestionText() {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className='question-text'>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].question)}
    </p>
  )
}
