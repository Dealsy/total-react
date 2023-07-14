import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ComponentLibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, 'flex flex-row justify-evenly flex-wrap gap-10')}
      >
        {children}
      </body>
    </html>
  )
}
