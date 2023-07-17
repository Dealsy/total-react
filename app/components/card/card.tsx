import clsx from 'clsx'

type CardProps = {
  children: React.ReactNode
  status: 'paid' | 'free' | 'coming'
}

export default function Card({ children, status }: CardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col  border-[#1f3870] border-2 rounded-2xl bg-gradient-to-r px-4 py-2 text-base max-w-sm',
        'md:p-5 md:my-5 md:text-lg md:h-[38rem]',
        'duration-200 ease-in-out transform hover:scale-110',
        status === 'free' && 'from-indigo-500 via-purple-500 to-pink-500',
        status === 'paid' && 'from-green-500 via-blue-500 to-indigo-500',
        status === 'coming' &&
          'from-gray-500 via-gray-500 to-gray-500 opacity-60 hover:scale-100'
      )}
    >
      <div
        className={clsx(
          'bg-[#15274d] px-5 py-5 rounded-lg bg-opacity-70 flex flex-col gap-5 ',
          'md:py-10 md:h-[35rem]'
        )}
      >
        {children}
      </div>
    </div>
  )
}
