type CardTitleProps = {
  children: React.ReactNode
}

export default function CardTitle({ children }: CardTitleProps) {
  return (
    <div className="flex justify-center mb-5">
      <h1 className="text-lg md:text-2xl font-bold text-center text-white">{children}</h1>
    </div>
  )
}
