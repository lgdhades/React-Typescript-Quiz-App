import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default function QuestionCategory() {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className='question-category'>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].category)}
    </p>
  )
}
