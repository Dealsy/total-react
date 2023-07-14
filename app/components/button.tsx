import clsx from 'clsx'

type buttonProps = {
  className?: string
  buttonStyle: 'primary' | 'secondary'
  children: React.ReactNode
}

export default function Button({ className, buttonStyle, children }: buttonProps) {
  return (
    <div
      className={clsx(
        className || '',
        buttonStyle === 'primary' &&
          `bg-inherit 
            px-4 
            py-2
            text-3xl
            `,
        buttonStyle === 'secondary' &&
          `bg-inherit
            px-4
            py-2
            text-3xl
            `
      )}
    >
      {children}
    </div>
  )
}
