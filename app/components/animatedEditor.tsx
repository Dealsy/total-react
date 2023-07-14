import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CodeEditor from './codeEditor'
import clsx from 'clsx'

type AnimatedEditorProps = {
  correctAnswer: boolean
  initialCode: string
  message?: string
  handleEditorChange: (newValue?: string | undefined) => void
}

export function AnimatedEditor({
  correctAnswer,
  initialCode,
  handleEditorChange,
  message,
}: AnimatedEditorProps) {
  return (
    <div className={clsx('mx-20 px-10 py-5 relative overflow-hidden')}>
      <div
        className={clsx(
          'absolute top-0 left-0 right-0 py-3 px-10 mx-20 mt-5 text-left',
          'rounded-t-md text-white font-bold bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500'
        )}
      >
        <p className="text-2xl">{message}</p>
      </div>

      <AnimatePresence>
        {correctAnswer && (
          <motion.div
            className={clsx(
              'absolute top-0 left-0 right-0 py-3 px-10 mx-20 mt-5 text-left',
              'rounded-t-md text-white font-bold bg-gradient-to-r from-green-700 via-green-500 to-green-300'
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-2xl">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={clsx('relative mt-5 p-10')}>
        <CodeEditor
          initialCode={initialCode}
          language={'typescript'}
          handleEditorChange={handleEditorChange}
          height={'30vh'}
        />
      </div>
    </div>
  )
}
