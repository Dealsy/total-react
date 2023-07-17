import clsx from 'clsx'

type buttonProps = {
  className?: string
  buttonStyle: 'primary' | 'secondary' | 'login'
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  className,
  buttonStyle,
  children,
  onClick,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className || '',
        buttonStyle === 'primary' &&
          'px-6 py-4 text-3xl bg-blue-500 border-2 border-blue-800 rounded-full text-center hover:bg-blue-600 ',
        buttonStyle === 'secondary' && 'bg-inherit px-4 py-2 text-3xl',
        buttonStyle === 'login' &&
          ' bg-inherit px-10 py-2 text-xl bg-primary border-2 border-primary-border rounded-lg hover:bg-blue-800 active:scale-90'
      )}
    >
      {children}
    </button>
  )
}
