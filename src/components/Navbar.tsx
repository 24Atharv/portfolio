import { AboutIcon } from "../icons/AboutIcon"
import { BlogIcon } from "../icons/BlogIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { ProjectIcon } from "../icons/projectIcon"

export const Navbar = () => {
    return <div className="border border-gray-200 rounded-xl bg-[#71717a] text-white
    px-20 py-3 flex gap-4">
        <HomeIcon />
        <ProjectIcon />
        <BlogIcon />
        <AboutIcon />
    </div>
}
