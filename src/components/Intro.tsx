export const Intro = () => {
    return <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-1 p-20 items-center justify-center break-words">
            <span className="font-bold text-4xl font-sans">Hi, I'm Atharv</span>
            <span className="w-130 leading-5 text-center text-sm">A Full Stack Developer passionate about building scalable web apps and solving real-world problems through clean, efficient code.</span>
            <span className="leading-3 text-lg font-semibold">If you’re working on something real, let’s talk.</span>
        </div>
        <div className="flex gap-5 text-black">
            <span className="bg-white px-4 py-1 rounded">Book a meet</span>
            <span className="bg-white px-4 py-1 rounded">Get in touch</span>
        </div>
    </div>
}
