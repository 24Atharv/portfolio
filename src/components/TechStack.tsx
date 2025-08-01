import { JsComponent } from "../TechstackIcon/JsComponent"
import { ReactIconComponent } from "../TechstackIcon/ReactComponent"
import { TailwindComponent } from "../TechstackIcon/tailwindComponent"

export const TechStack = () => {
    return <div className="border border-gray-200 p-4 rounded-lg flex gap-4">
        <JsComponent />
        <TailwindComponent />
        <ReactIconComponent />
    </div>
}
