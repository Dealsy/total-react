import clsx from 'clsx'

type ParagraphProps = {
  children: React.ReactNode
  className?: string
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <div
      className={clsx(
        className ||
          'flex flex-col gap-5 w-full border-[#1f3870] border-2 rounded-2xl bg-[#15274d]',
        'px-4 py-2 text-base',
        'md:text-lg md:px-14 md:py-10 md:my-5'
      )}
    >
      {children}
    </div>
  )
}
