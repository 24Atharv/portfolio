import './App.css'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { TechStack } from './components/TechStack'

function App() {
  return <div className='bg-black min-h-screen text-white'>
    <div className='p-10 flex flex-col justify-center items-center'>
      <Navbar />
      <Intro />
      <TechStack />
    </div>
  </div>
}

export default App
