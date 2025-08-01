import './App.css'
import { Intro } from './components/intro'
import { Navbar } from './components/Navbar'

function App() {
  return <div className='bg-black min-h-screen text-white'>
    <div className='p-10 flex flex-col justify-center items-center'>
      <Navbar />
      <Intro />
    </div>
  </div>
}

export default App
