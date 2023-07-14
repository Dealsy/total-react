import { ReactElement } from 'react'

type DropdownProps = {
  defaultTheme: string | number | readonly string[] | undefined
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  data: any
}

export const Dropdown = ({ defaultTheme, onChange, data }: DropdownProps) => {
  return (
    <select className="select" defaultValue={defaultTheme} onChange={onChange}>
      {Object.keys(data)
        .sort()
        .map((theme, index) => {
          return (
            <option key={index} value={theme}>
              {theme}
            </option>
          )
        })}
    </select>
  )
}
