import { ExpressIcon } from "../TechstackIcon/ExpressIcon"
import { JsIcon } from "../TechstackIcon/JsIcon"
import { NodejsIcon } from "../TechstackIcon/NodejsIcon"
import { ReactIcon } from "../TechstackIcon/ReactIcon"
import { TailwindIcon } from "../TechstackIcon/TailwindIcon"

export const TechStack = () => {
    return <div className="border border-gray-200 p-4 rounded-lg flex gap-4">
        <JsIcon />
        <TailwindIcon />
        <ReactIcon />
        <NodejsIcon />
        <ExpressIcon />
    </div>
}

