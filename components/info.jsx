import Image from "next/image";

export default function Info() {
    return (
        <section className="flex bg-[#DFD6E8] min-h-[620px] mb-20">
            <div className="flex w-full pl-4">
                <div className="flex flex-col w-1/3 text-center items-center justify-center gap-6">
                    <p className="text-xl text-black font-normal uppercase">
                        100% натуральные
                    </p>
                    <h3 className=" text-4xl text-[#362D6C] font-semibold uppercase">
                        Свежие фрукты и<br/> ягоды
                    </h3>
                    <p className="text-base text-black font-normal uppercase">
                        Лучшие цены для наших клиентов
                    </p>
                </div>
                <div className="w-2/3 flex justify-end">
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