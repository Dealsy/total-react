import Header from '@/app/components/headings'
import Paragraph from '@/app/components/paragraph'
import clsx from 'clsx'

const user = 'Matt'

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
      {user === 'Matt' ? (
        <Paragraph
          className={clsx(
            'bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 rounded-lg z-50',
            'absolute w-full top-44 transform translate-y-1/2 bg-opacity-20'
          )}
        >
          Buy the thing!
        </Paragraph>
      ) : null}
    </div>
  )
}
