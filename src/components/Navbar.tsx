import { AboutIcon } from "../icons/AboutIcon"
import { BlogIcon } from "../icons/BlogIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { MiddleIcon } from "../icons/MiddleIcon"
import { ProjectIcon } from "../icons/projectIcon"
import { ResumeIcon } from "../icons/ResumeIcon"

export const Navbar = () => {
    return <div className="border border-gray-200 rounded-xl bg-[#71717a] text-white
    px-20 py-2 flex items-center gap-4 justify-center">
        <div className="flex gap-3">
            <HomeIcon />
            <ProjectIcon />
            <BlogIcon />
            <AboutIcon />
        </div>
        <MiddleIcon />
        <div>
            <ResumeIcon />
        </div>
    </div>
}
