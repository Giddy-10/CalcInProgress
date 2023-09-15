import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'

function App() {
  const [expressionInput, setExpressionInput] = useState([])
  const [answer, setAnswer] = useState(0)

  function inputValue (value) {
    setExpressionInput(prevInputs => [...prevInputs, value]);
  }

  return (
    <>
      <Calculator
        expressionInput={expressionInput}
        answer={answer}
        inputValue={inputValue}
      />
    </>
  )
}

export default App
