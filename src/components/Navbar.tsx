import { AboutIcon } from "../icons/AboutIcon"
import { BlogIcon } from "../icons/BlogIcon"
import { GithubIcon } from "../icons/githubIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { MiddleIcon } from "../icons/MiddleIcon"
import { MoonIcon } from "../icons/MoonIcon"
import { ProjectIcon } from "../icons/projectIcon"
import { ResumeIcon } from "../icons/ResumeIcon"
import { SunIcon } from "../icons/SunIcon"
import { TwitterIcon } from "../icons/TwitterIcon"

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
