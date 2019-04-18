import React from "react"
import ReactDOM from "react-dom"

type FormElem = React.FormEvent<HTMLFormElement>

export default function App(): JSX.Element {
  const [value, setValue] = React.useState<string>("")

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    setValue("")
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}

const root = document.getElementById("app-root")

ReactDOM.render(<App />, root)
