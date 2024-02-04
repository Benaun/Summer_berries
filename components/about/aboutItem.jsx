import Image from "next/image";

export default function AboutItem({img, title, text}) {
    return (
        <div className="w-1/4 flex flex-col items-center">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[175px] lg:h-[175px] rounded-full bg-[#DFD6E8] relative mb-6">
                <Image
                    src={img}
                    width={0}
                    height={0}
                    alt="About"
                    sizes="100vh"
                    className="w-[50px] h-[50px] md:w-[73px] md:h-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                />
            </div>
            <div className="flex flex-col text-center">
                <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-[#362D6C]">
                    <strong>{title}</strong>
                </h3>
                <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-normal text-[#362d6c]">
                    {text}
                </p>
            </div>
        </div>
    )
}

