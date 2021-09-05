import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default function QuestionDifficulty() {
  const [CurrentQuestion] = useContext(CurrentQuestionContext)

  function getNumberOfStars() {
    if (QuestionsData[CurrentQuestion - 1].difficulty === 'hard') {
      return '★★★'
    } else if (QuestionsData[CurrentQuestion - 1].difficulty === 'medium') {
      return '★★✰'
    } else if (QuestionsData[CurrentQuestion - 1].difficulty === 'easy') {
      return '★✰✰'
    }
  }

  return (
    <p className='question-difficulty' >
      {getNumberOfStars()}
    </p>
  )
}
