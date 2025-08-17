import { CIcon } from "../TechstackIcon/CIcon"
import { ExpressIcon } from "../TechstackIcon/ExpressIcon"
import { JsIcon } from "../TechstackIcon/JsIcon"
import { MongoDbIcon } from "../TechstackIcon/MongoDbIcon"
import { NextJsIcon } from "../TechstackIcon/NextJsIcon"
import { NodejsIcon } from "../TechstackIcon/NodejsIcon"
import { PostgresIcon } from "../TechstackIcon/PostgresIcon"
import { PrismaIcon } from "../TechstackIcon/PrismaIcon"
import { ReactIcon } from "../TechstackIcon/ReactIcon"
import { RedisIcon } from "../TechstackIcon/RedisIcon"
import { TailwindIcon } from "../TechstackIcon/TailwindIcon"
import { TypeScriptIcon } from "../TechstackIcon/TypeScriptIcon"

export const TechStack = () => {
    return <div className="flex flex-col gap-1 items-center mt-9">
        <span className="font-bold text-2xl">Tech Stack</span>
        <div className="lg:w-200 border border-gray-200 p-4 h-auto rounded-lg">
            <div className="flex flex-wrap gap-3">
                <JsIcon />
                <TailwindIcon />
                <ReactIcon />
                <NodejsIcon />
                <ExpressIcon />
                <TypeScriptIcon />
                <MongoDbIcon />
                <NextJsIcon />
                <PrismaIcon />
                <PostgresIcon />
                <RedisIcon />
                <CIcon />
            </div>
        </div>
    </div>
}

