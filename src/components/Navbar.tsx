import { AboutIcon } from "../Navicons/AboutIcon"
import { BlogIcon } from "../Navicons/BlogIcon"
import { GithubIcon } from "../Navicons/GithubIcon"
import { HomeIcon } from "../Navicons/HomeIcon"
import { MiddleIcon } from "../Navicons/MiddleIcon"
import { MoonIcon } from "../Navicons/MoonIcon"
import { ProjectIcon } from "../Navicons/ProjectIcon"
import { ResumeIcon } from "../Navicons/ResumeIcon"
import { SunIcon } from "../Navicons/SunIcon"
import { TwitterIcon } from "../Navicons/TwitterIcon"

export const Navbar = () => {
    return <div className="border border-gray-200 rounded-2xl bg-[#71717a] text-white
    px-30 py-2 flex items-center gap-4 justify-between">
        <div className="flex gap-7 px-3">
            <HomeIcon />
            <ProjectIcon />
            <BlogIcon />
            <AboutIcon />
        </div>
        <MiddleIcon />
        <div className="flex gap-7 items-center justify-center px-3">
            <ResumeIcon />
            <GithubIcon />
            <TwitterIcon />
        </div>
        <MiddleIcon />
        <div className="flex px-4 items-center justify-center">
        <MoonIcon />
        <SunIcon />
        </div>
    </div>
}
