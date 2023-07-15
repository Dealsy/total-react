'use client'

import Link from 'next/link'
import { AnimatedEditor } from './components/animatedEditor'
import { RenderChallenge } from './challengers/challengers'
import { useState } from 'react'
import Button from './components/button'

export default function Home() {
  const initialCode = RenderChallenge

  const [answer, setAnswer] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)

  const handleEditorChange = (newValue?: string | undefined) => {
    if (newValue) {
      setAnswer(newValue)
      if (newValue.includes('<Counter />')) {
        setCorrectAnswer(true)
      } else {
        setCorrectAnswer(false)
      }
    }
  }

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  const Counter = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <h1>
          {`You've`} clicked the button {count} times.
        </h1>
        <div className="flex gap-5">
          <Button buttonStyle="primary" onClick={handleClick}>
            Click me!
          </Button>
          <Button buttonStyle="primary" onClick={handleReset}>
            Reset{' '}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Link href="/componentLibrary"> Component Library </Link>

      <div className="w-full">
        <AnimatedEditor
          correctAnswer={correctAnswer}
          initialCode={initialCode}
          handleEditorChange={handleEditorChange}
          message={correctAnswer ? 'Correct answer!' : 'Challenge: Render component'}
        />
        {correctAnswer ? <Counter /> : null}
      </div>
    </main>
  )
}
