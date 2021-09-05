import './Answer.css'

interface PropsType {
  children: string
}

export default function AnswerButton({ children, ...restProps }: PropsType) {
  return <button {...restProps}>{children}</button>
}
