import clsx from 'clsx'
import { Grandstander, Merienda, Inter, PT_Serif } from 'next/font/google'

type HeaderProps = {
  className?: string
  headerStyle: 'h4' | 'h3' | 'h2' | 'h1'
  heading?: string
  children?: React.ReactNode
  fonts?: 'grandstander' | 'merienda' | 'inter' | 'pt_Serif'
}

const grandstander = Grandstander({ subsets: ['latin'], weight: ['400', '500', '600'] })
const merienda = Merienda({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const pt_Serif = PT_Serif({ subsets: ['latin'], weight: ['400'] })

export default function Header({
  className,
  headerStyle,
  heading,
  fonts,
  children,
}: HeaderProps) {
  return (
    <div
      className={clsx(
        className || '',
        headerStyle === 'h4' && `bg-inherit px-4 py-2 text-3xl`,
        headerStyle === 'h3' && `bg-inherit px-4 py-2 text-4xl`,
        headerStyle === 'h2' && `bg-inherit px-4 py-2 text-5xl`,
        headerStyle === 'h1' && `bg-inherit px-4 py-2 md:text-6xl text-2xl`,
        fonts === 'grandstander' && grandstander.className,
        fonts === 'merienda' && merienda.className,
        fonts === 'inter' && inter.className,
        fonts === 'pt_Serif' && pt_Serif.className
      )}
    >
      {heading}
      {children}
    </div>
  )
}
