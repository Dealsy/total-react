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
import Image from 'next/image'

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
    <main className={clsx('flex min-h-screen flex-col')}>
      <div className="flex flex-col bg-gradient-to-t from-[#0a1224] to-black to-10% md:flex-row md:px-30 md:items-center">
        <div className="p-10  md:w-1/2 md:pl-[16rem]">
          <Header headerStyle="h2" fonts="pt_Serif" className="italic">
            <p>
              Harness the power of React, with{' '}
              <span className="text-red-400">Total React </span>
            </p>
          </Header>
        </div>
        <Image
          alt="logo"
          src="/reactlogo.png"
          width={750}
          height={750}
          className="pb-10 rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-10 md:px-44">
        <Paragraph>
          <p>
            Hello and welcome to{' '}
            <span className="mr-1 font-semibold text-red-400">Total React</span>
          </p>
          <p>
            The idea behind this course came from the lack of real world examples in
            courses and videos.{' '}
            <span className="mr-1 font-semibold text-red-400">Total React</span> aims to
            teach you React, by using real world examples, and by the end of this course,
            you will have a good understanding of React, and how to use it.
          </p>

          <p>
            <span className="mr-1 font-semibold text-red-400">Total React</span>
            will be an ongoing development, meaning I will continuously add new content as
            time goes on, we will start with the fundamentals of React, and then start to
            build on top of that, with more advanced topics, such as hooks, and context,
            all of these will be explained in detail, and will be accompanied by real
            world examples.
          </p>
          <p>
            On top of that this course will also include interactive code, and challenges,
            more on that below.
          </p>

          <Warning type="info">
            Whilst this site is supported on mobile, we highly reccomend that you go
            through this on your PC for a better exprience.
          </Warning>
        </Paragraph>
        <Header headerStyle="h3" heading="Challengers:" />
        <Paragraph>
          <p>
            Challengers will appear throughout the course, they are designed to test your
            knowledge, These Challengers, are reperestented by a code editor, where you
            will be asked to complete a task, on completion of the task, you will see a
            message to let you know if you have completed the task correctly, some tasks
            will also render a component, which will be displayed below the code editor,
            this component will be related to the code editor task you had just completed,
            and will be a representation of the code you had just written.
          </p>
          <Warning type="info">
            Note: Thes code editor is not linked directly to the rendered component, so
            changing the code in the editor will not change the component, These
            components are to help you visualise the code you had just written, and to
            help you understand how the code you had just written, is rendered in the
            browser.
          </Warning>
          <p>
            Below is your first challenge! the instructions for this challenge are written
            as comments in the code editor, some times the challengers will include hints
            to help you along.
          </p>
          <p>Good luck!</p>
        </Paragraph>
        <div className="w-full m-auto mt-5 md:mt-0">
          <AnimatedEditor
            correctAnswer={correctAnswer}
            handleEditorChange={handleEditorChange}
            initialCode={initialCode}
            message={correctAnswer ? `Congratulations!` : 'Challenge 1: Hello World'}
          />
        </div>

        <Paragraph>
          <p>Nice work! {`you've`} just completed your first challenge!</p>

          <p>
            Throughout Total React you will find many other challengers some wiill render
            full components that you will be able to play around with, so that you can see
            what the code is creating
          </p>

          <p>
            I {`can't`} wait to teach you all about React and much more, and hopfully{' '}
            {`you're`} as excited to lean.
          </p>
        </Paragraph>
        <Header headerStyle="h2" heading="Sections:" />

        <div className="flex flex-row flex-wrap justify-center gap-10 ">
          <Link href="/componentRender">
            <Card status="free">
              <CardTitle> What is React? </CardTitle>
              <Pill status="free" text="Free" />
              <p>
                In this section we ask the question that is, what is React and why should
                we use it?
              </p>
              <p>Will discuss why to use React, and when we should use it.</p>
            </Card>
          </Link>
          <Link href="/componentRender">
            <Card status="free">
              <CardTitle> Components </CardTitle>
              <Pill status="free" text="Free" />
              <p>
                In this section we will learn about components, how to render them, and
                how to use JSX to display informtion on the screen.
              </p>
              <p>
                {' '}
                On top of that, we will learn about prop drilling, and how we can use that
                to pass down properties to our components, and why we would want to do
                that.
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
                In this section we will learn how to render lists using the map function
                and dummby data
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
              <ul className="px-5 list-disc">
                <li>useState</li>
                <li>useEffect</li>
                <li>useReducer</li>
                <li>useContext</li>
              </ul>
            </Card>
          </Link>
          <Link href="/advancedHooks/AdvancedHooks">
            <Card status="paid">
              <CardTitle> Advanced hooks </CardTitle>
              <Pill status="paid" text="Paid" />
              <p>In this section we will learn about advanced hooks</p>
              <p> These include:</p>
              <ul className="px-5 list-disc">
                <li>useMemo</li>
                <li>useCallback</li>
                <li>useRef</li>
                <li>many more..</li>
              </ul>
            </Card>
          </Link>
          <Link href="/componentRender">
            <Card status="paid">
              <CardTitle> Custom Hooks </CardTitle>
              <Pill status="paid" text="Paid" />
              <p>In this section we will learn about advanced hooks</p>
              <p> These include:</p>
              <ul className="px-5 list-disc">
                <li>useMemo</li>
                <li>useCallback</li>
                <li>useRef</li>
                <li>many more..</li>
              </ul>
            </Card>
          </Link>
          <Link href="/componentRender">
            <Card status="paid">
              <CardTitle> Next JS </CardTitle>
              <Pill status="paid" text="Paid" />
              <p>In this section we will learn about advanced hooks</p>
              <p> These include:</p>
              <ul className="px-5 list-disc">
                <li>useMemo</li>
                <li>useCallback</li>
                <li>useRef</li>
                <li>many more..</li>
              </ul>
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
      </div>
    </main>
  )
}
