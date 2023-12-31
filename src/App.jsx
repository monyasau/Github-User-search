import { useState } from 'react'
import GithubSearch from './components/GithubSearch'
import TopNav from './components/TopNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav/>
      <GithubSearch/>
    </>
  )
}

export default App
