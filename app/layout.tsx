import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Total React',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, ' flex flex-col justify-evenly')}>
        <div className="flex">
          <Nav />
        </div>
        {children}
      </body>
    </html>
  )
}
