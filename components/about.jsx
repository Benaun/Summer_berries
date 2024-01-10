import Image from "next/image";

export function About() {
    return (
        <section className="flex flex-col justify-center mb-20">
            <div className="flex flex-col text-center gap-5 mb-10">
                <h3 className=" text-4xl font-bold text-[#362D6C]">
                    О нас
                </h3>
                <p className="text-2xl font-normal text-[#362d6c]">
                    Что мы предлагаем
                </p>
            </div>
            <div className="flex w-full justify-center gap-7">

                <div className="w-1/4 flex flex-col items-center">
                    <div className="w-[175px] h-[175px] rounded-full bg-[#DFD6E8] relative mb-6">
                        <Image
                            src="/images/about1.png"
                            width={0}
                            height={0}
                            alt="About"
                            sizes="100vh"
                            className="w-[73px] h-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className=" text-2xl font-medium text-[#362D6C]">
                            100% natural
                        </h3>
                        <p className="text-2xl font-normal text-[#362d6c]">
                            только качественная<br/> продукция
                        </p>
                    </div>
                </div>

                <div className="w-1/4 flex flex-col items-center">
                    <div className="w-[175px] h-[175px] rounded-full bg-[#DFD6E8] relative mb-6">
                        <Image
                            src="/images/about2.png"
                            width={0}
                            height={0}
                            alt="About"
                            sizes="100vh"
                            className="w-[73px] h-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className=" text-2xl font-medium text-[#362D6C]">
                            100% natural
                        </h3>
                        <p className="text-2xl font-normal text-[#362d6c]">
                            только качественная<br/> продукция
                        </p>
                    </div>
                </div>

                <div className="w-1/4 flex flex-col items-center">
                    <div className="w-[175px] h-[175px] rounded-full bg-[#DFD6E8] relative mb-6">
                        <Image
                            src="/images/about3.png"
                            width={0}
                            height={0}
                            alt="About"
                            sizes="100vh"
                            className="w-[73px] h-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className=" text-2xl font-medium text-[#362D6C]">
                            100% natural
                        </h3>
                        <p className="text-2xl font-normal text-[#362d6c]">
                            только качественная<br/> продукция
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}