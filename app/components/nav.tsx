'use client'

import clsx from 'clsx'
import Header from './headings'
import Button from './button'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      className={clsx(
        'w-full border-b-2 border-[#1f3870] p-3 flex flex-row justify-between items-center',
        'md:p-6'
      )}
    >
      <Link href={'/'}>
        {/* <Header headerStyle="h1" heading="Total React" /> */}
        <p className="text-lg md:text-4xl">
          {' '}
          <span className="text-[#007eea]">{`{ ...`}</span>
          Total React
          <span className="text-[#007eea]">{' }'}</span>
        </p>
      </Link>
      <a href="/api/auth/login">
        <Button buttonStyle="login"> Login </Button>
      </a>
    </nav>
  )
}
