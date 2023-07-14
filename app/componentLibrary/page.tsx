'use client'

import { useState } from 'react'
import Button from '../components/button'
import Header from '../components/headings'
import { AnimatedEditor } from '../components/animatedEditor'
import { TestChallenge } from '../challengers/challengers'

export default function ComponentLibrary() {
  const initialCode = TestChallenge

  const [answer, setAnswer] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)

  const handleEditorChange = (newValue?: string | undefined) => {
    if (newValue) {
      setAnswer(newValue)
      if (newValue.includes("const World = 'World'")) {
        setCorrectAnswer(true)
      } else {
        setCorrectAnswer(false)
      }
    }
  }

  return (
    <>
      <div>
        <Header headerStyle="h1" heading="Code Editor" />
      </div>

      <AnimatedEditor
        correctAnswer={correctAnswer}
        handleEditorChange={handleEditorChange}
        initialCode={initialCode}
        message={
          correctAnswer
            ? `Congratulations! That's the correct answer`
            : 'Challenge 1: Hello World'
        }
      />

      <div className="flex flex-col">
        <Header headerStyle="h1" heading="Headings" />
        <Header headerStyle="h1" heading="H1" />
        <Header headerStyle="h2" heading="H2" />
        <Header headerStyle="h3" heading="H3" />
        <Header headerStyle="h4" heading="H4" />
      </div>

      <div className="flex flex-col">
        <Header headerStyle="h1" heading="Buttons" />
        <Button buttonStyle="primary">Primary</Button>
        <Button buttonStyle="secondary">Secondary</Button>
      </div>

      <div>
        <Header headerStyle="h1" heading="Inputs" />
      </div>

      <div>
        <Header headerStyle="h1" heading="Cards" />
      </div>
    </>
  )
}
