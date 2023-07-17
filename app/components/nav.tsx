import clsx from 'clsx'
import Header from './headings'

export default function Nav() {
  return (
    <nav className={clsx('w-full border-b-2 border-[#1f3870] mb-10 p-3', 'md:p-6')}>
      <Header headerStyle="h1" heading="Total React" />
    </nav>
  )
}
