import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default function QuestionNumber() {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  const totalQuestions = QuestionsData.length

  return (
    <p className='question-number'>
      Question {currentQuestion} of {totalQuestions}
    </p>
  )
}
