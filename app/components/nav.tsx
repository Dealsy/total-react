'use client'

import clsx from 'clsx'
import Header from './headings'
import Button from './button'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      className={clsx(
        'w-full border-b-2 border-[#1f3870] mb-10 p-3 flex flex-row justify-between items-center',
        'md:p-6'
      )}
    >
      <Link href={'/'}>
        <Header headerStyle="h1" heading="Total React" />
      </Link>
      <a href="/api/auth/login">
        <Button buttonStyle="login"> Login </Button>
      </a>
    </nav>
  )
}
