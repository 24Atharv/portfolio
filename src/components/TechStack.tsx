import { ExpressIcon } from "../TechstackIcon/ExpressIcon"
import { JsIcon } from "../TechstackIcon/JsIcon"
import { MongoDbIcon } from "../TechstackIcon/MongoDbIcon"
import { NodejsIcon } from "../TechstackIcon/NodejsIcon"
import { ReactIcon } from "../TechstackIcon/ReactIcon"
import { TailwindIcon } from "../TechstackIcon/TailwindIcon"
import { TypeScriptIcon } from "../TechstackIcon/TypeScriptIcon"

export const TechStack = () => {
    return <div className="border border-gray-200 p-4 rounded-lg flex gap-4">
        <JsIcon />
        <TailwindIcon />
        <ReactIcon />
        <NodejsIcon />
        <ExpressIcon />
        <TypeScriptIcon />
        <MongoDbIcon />
    </div>
}

