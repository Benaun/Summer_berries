import Image from "next/image";

const aboutData = [
    {
        id: 1,
        icon: "/about/about1.svg",
        title: "100% натуральное",
        description: "всегда качественная продукция"
    },
    {
        id: 2,
        icon: "/about/about2.svg",
        title: "100% без гмо",
        description: "только домашняя продукция"
    },
    {
        id: 3,
        icon: "/about/about3.svg",
        title: "100% оперативно",
        description: "сегодня заказали - завтра забрали"
    },
]

export default function About() {
    return (
        <section className="relative z-40 pb-3 md:pb-10">
            <div className="container mx-auto mt-10">
                <div className="flex flex-col text-center gap-2 md:gap-5  mb-5 md:mb-10">
                    <h2 className="h3 md:h2 font-medium text-[#362D6C]">
                        О нас
                    </h2>
                    <p className="text-xl md:h3 font-normal text-[#362d6c]">
                        Что мы предлагаем
                    </p>
                </div>
                <div className="flex w-full justify-center gap-5 md:gap-7">
                    {aboutData.map(item => (
                        <div className="w-1/3 flex flex-col items-center" key={item.id}>
                            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[175px] lg:h-[175px] rounded-full bg-[#DFD6E8] relative mb-6">
                                <Image
                                    src={item.icon}
                                    width={0}
                                    height={0}
                                    alt="About"
                                    sizes="100vh"
                                    className="w-[50px] h-[50px] md:w-[73px] md:h-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                                />
                            </div>
                            <div className="flex flex-col text-center">
                                <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-[#362D6C]">
                                    <strong>{item.title}</strong>
                                </h3>
                                <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-normal text-[#362d6c]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}