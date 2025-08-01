import './App.css'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { ProjectSection } from './components/ProjectSection'
import { TechStack } from './components/TechStack'

function App() {
  return <div className='bg-black min-h-screen text-white flex flex-col items-center'>
    <div className='p-7 flex flex-col justify-center items-center'>
      <Navbar />
      </div>
      <div className='flex flex-col items-center'>
      <Intro />
      <TechStack />
      <ProjectSection />
      </div>
    </div>
}

export default App
