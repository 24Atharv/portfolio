import { Intro } from "./Intro"
import { Navbar } from './Navbar'
import { ProjectSection } from './ProjectSection'
import { TechStack } from './TechStack'

export const Dashboard = () => {
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

