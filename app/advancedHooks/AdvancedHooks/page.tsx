import Header from '@/app/components/headings'
import Paragraph from '@/app/components/paragraph'
import clsx from 'clsx'

export default function AdvancedHooks() {
  return (
    <div className={clsx('flex min-h-screen flex-col px-10 relative', 'md:px-44')}>
      <Header headerStyle="h1" heading="Advanced React Hooks" />
      <Paragraph>
        Memo stuff Memo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo
        stuffMemo stuffMemo stuffMemo stuffMemo stuff Memo stuff Memo stuffMemo stuffMemo
        stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo
        stuff Memo stuff Memo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo
        stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuff Memo stuff Memo stuffMemo
        stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo
        stuffMemo stuff Memo stuff Memo stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo
        stuffMemo stuffMemo stuffMemo stuffMemo stuffMemo stuff
      </Paragraph>
    </div>
  )
}
