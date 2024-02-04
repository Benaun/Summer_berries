import Image from "next/image";

export default function Info() {
    return (
        <section className="flex bg-[#DFD6E8] min-h-[400px] xl:min-h-[620px] mb-10 md:mb-20">
            <div className="flex w-full xl:pl-4">
                <div className="flex flex-col w-full xl:w-1/3 text-center items-center justify-center gap-3 md:gap-6">
                    <p className="text-lg md:text-xl text-black font-normal uppercase">
                        100% натуральные
                    </p>
                    <h1 className="text-2xl md:text-4xl text-[#362D6C] font-semibold uppercase">
                        Свежие фрукты и<br/> ягоды
                    </h1>
                    <p className="text-base text-black font-normal uppercase">
                        Лучшие цены для наших клиентов
                    </p>
                </div>
                <div className="hidden xl:w-2/3 xl:flex xl:justify-end">
                    <Image
                        src="/images/Main.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" w-full h-auto"
                        alt="Berries"
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}