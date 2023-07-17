import clsx from 'clsx'

type HeaderProps = {
  className?: string
  headerStyle: 'h4' | 'h3' | 'h2' | 'h1'
  heading: string
}

export default function Header({ className, headerStyle, heading }: HeaderProps) {
  return (
    <div
      className={clsx(
        className || '',
        headerStyle === 'h4' &&
          `bg-inherit 
            px-4 
            py-2
            text-3xl
            `,
        headerStyle === 'h3' &&
          `bg-inherit 
            px-4 
            py-2
            text-4xl
            `,
        headerStyle === 'h2' &&
          `bg-inherit 
            px-4 
            py-2
            text-5xl
            `,
        headerStyle === 'h1' &&
          `bg-inherit 
            px-4 
            py-2
            md:text-6xl
            text-2xl
            `
      )}
    >
      {heading}
    </div>
  )
}
