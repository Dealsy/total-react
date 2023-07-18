import clsx from 'clsx'

type WarningProps = {
  children: React.ReactNode
  type: 'warning' | 'info' | 'success' | 'danger'
  className?: string
}

export default function Warning({ children, type, className }: WarningProps) {
  return (
    <p
      className={clsx(
        className &&
          type === 'warning' &&
          'bg-[#aa8231] p-5 rounded-xl text-base border-2 border-yellow-300',
        type === 'info' &&
          'bg-[#335cb7] p-5 rounded-xl text-base border-2 border-blue-500',
        type === 'success' &&
          'bg-green-700 p-5 rounded-xl text-base border-2 border-green-500',
        type === 'danger' && 'bg-red-700 p-5 rounded-xl text-base border-2 border-red-500'
      )}
    >
      {children}
    </p>
  )
}
