import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChooseLanguage from './components/ChooseLanguage'
import BirthDate from "./components/BirthDate";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ChooseLanguage />
     <BirthDate date={new Date(2015, 10, 20)} />
    </>
  )
}

export default App
