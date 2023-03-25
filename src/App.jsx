import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Facts'


function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
    setDarkMode(prevMode =>{
      return !prevMode
    })
  }

  return (
    <div className="
    container">
      <Navbar
      darkMode = {darkMode}
      toggleDarkMode={toggleDarkMode}/>
      <Main
      darkMode = {darkMode}/>
    </div>
  )
}

export default App
