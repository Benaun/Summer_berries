import Image from "next/image";

export default function AboutItem({img, title, text}) {
    return (
        <div className="w-1/4 flex flex-col items-center">
            <div className="w-[175px] h-[175px] rounded-full bg-[#DFD6E8] relative mb-6">
                <Image
                    src={img}
                    width={0}
                    height={0}
                    alt="About"
                    sizes="100vh"
                    className="w-[73px] h-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                />
            </div>
            <div className="flex flex-col text-center">
                <h3 className=" text-2xl font-medium text-[#362D6C]">
                    {title}
                </h3>
                <p className="text-2xl font-normal text-[#362d6c]">
                    {text}
                </p>
            </div>
        </div>
    )
}

