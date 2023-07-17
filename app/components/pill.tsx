import clsx from 'clsx'
import { FC } from 'react'

type PillProps = {
  text: string
  status: 'paid' | 'free' | 'coming'
}

const Pill: FC<PillProps> = ({ text, status }) => {
  return (
    <div>
      <span
        className={clsx(
          'inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r mb-5',
          status === 'free' && 'from-indigo-500 via-purple-500 to-pink-500 mb-5',
          status === 'paid' && 'from-green-500 via-blue-500 to-indigo-500',
          status === 'coming' && 'from-gray-500 via-gray-500 to-gray-500'
        )}
      >
        {text}
      </span>
    </div>
  )
}

export default Pill
