import Link from 'next/link'
import { UrlObject } from 'url'

type NextPageProps = {
  route: UrlObject | string
  link: string
}

export default function PageRoute({ route, link }: NextPageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Link href={route}>{link}</Link>
    </div>
  )
}
