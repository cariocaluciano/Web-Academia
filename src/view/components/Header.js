
export function Header ({ title }) {
  return (
    <header className="border-b-2 font-semibold py-2 px-4 border-black-600 flex justify-between items-center">
      <span>{title}</span>
    </header>
  )
}
