'use client'

import Link from 'next/link'
import { AnimatedEditor } from './components/animatedEditor'
import { TestChallenge } from './challengers/sectionOne/challengers'
import { useState } from 'react'
import Paragraph from './components/paragraph'
import Header from './components/headings'
import Warning from './components/warning'
import clsx from 'clsx'
import Card from './components/card/card'
import CardTitle from './components/card/cardTitle'
import Pill from './components/pill'

export default function Home() {
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
    <main className={clsx('flex min-h-screen flex-col px-10', 'md:px-44')}>
      <Paragraph>
        <p>
          Hello and welcome to Total React, this course is designed to help you learn all
          things React
        </p>
      </Paragraph>
      <Header headerStyle="h3" heading="Challengers:" />
      <Paragraph>
        <p>
          Challengers will appear throughout the course, they are designed to test your
          knowledge, These Challengers, are represtned by a code editor, where you will be
          asked to complete a task, on completion of the task, you will see a message to
          let you know if you have completed the task correctly, some tasks will also
          render a component, which will be displayed below the code editor, this
          component will be related to the code editor task you had just completed, and
          will be a representation of the code you had just written.
        </p>
        <Warning type="info">
          Note: Thes code editor is not linked directly to the rendered component, so
          changing the code in the editor will not change the component, These components
          are to help you visualise the code you had just written, and to help you
          understand how the code you had just written, is rendered in the browser.
        </Warning>
        <p>
          Below is your first challenge! the instructions for this challenge are written
          as comments in the code editor, some times the challengers will include hints to
          help you along.
        </p>
        <p>Good luck!</p>
      </Paragraph>
      <div className="w-5/6 m-auto mt-5 md:mt-0 md:w-full">
        <AnimatedEditor
          correctAnswer={correctAnswer}
          handleEditorChange={handleEditorChange}
          initialCode={initialCode}
          message={correctAnswer ? `Congratulations!` : 'Challenge 1: Hello World'}
        />
      </div>
      <Header headerStyle="h2" heading="Sections:" />

      <div className="flex flex-row justify-center flex-wrap gap-10">
        <Link href="/componentRender">
          <Card status="free">
            <CardTitle> Components </CardTitle>
            <Pill status="free" text="Free" />
            <p>
              In this section we will learn about components, how to render them, and how
              to use JSX to display informtion on the screen.
            </p>
            <p>
              {' '}
              On top of that, we will learn about prop drilling, and how we can use that
              to pass down properties to our components, and why we would want to do that.
            </p>
          </Card>
        </Link>
        <Link href="/componentRender">
          <Card status="free">
            <CardTitle> Conditional Rendering </CardTitle>
            <Pill status="free" text="Free" />
            <p>In this section we will learn how to conditionally render components.</p>
            <p>
              This means to display components based on certain conditions being made,
              which are triggered via actions from the user
            </p>
          </Card>
        </Link>
        <Link href="/componentRender">
          <Card status="free">
            <CardTitle> Rendering Lists </CardTitle>
            <Pill status="free" text="Free" />
            <p>
              In this section we will learn how to render lists using the map function and
              dummby data
            </p>
            <p>
              {' '}
              Here we will also learn about keys and why they are really important for
              React{' '}
            </p>
          </Card>
        </Link>
        <Link href="/componentRender">
          <Card status="free">
            <CardTitle> Basic Hooks </CardTitle>
            <Pill status="free" text="Free" />
            <p>In this section we will learn how what hooks are and how to use them.</p>
            <p> We will cover hooks such as:</p>
            <ul className="list-disc px-5">
              <li>useState</li>
              <li>useEffect</li>
              <li>useReducer</li>
              <li>useContext</li>
            </ul>
          </Card>
        </Link>
        <Link href="/componentRender">
          <Card status="paid">
            <CardTitle> Conditional Rendering </CardTitle>
            <Pill status="paid" text="Paid" />
            <p>In this section we will learn how to conditionally render components</p>
          </Card>
        </Link>

        <Card status="coming">
          <CardTitle> Render a Component </CardTitle>
          <Pill status="coming" text="Coming soon" />
          <p>
            In this section we will learn how to render a component, we will also learn
            about the different types of components, and how to use them.
          </p>
          <p> On top of that, we will learn about prop drilling </p>
        </Card>
      </div>
    </main>
  )
}
