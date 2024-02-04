import AboutItem from "./aboutItem";

export function About() {
    return (
        <section className="flex flex-col justify-center mb-5 md:mb-20">
            <div className="flex flex-col text-center gap-2 md:gap-5  mb-5 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-medium text-[#362D6C]">
                    О нас
                </h2>
                <p className="text-lg md:text-2xl font-normal text-[#362d6c]">
                    Что мы предлагаем
                </p>
            </div>
            <div className="flex w-full justify-center gap-5 md:gap-7">
                <AboutItem
                    img={"/images/about1.svg"}
                    title={"100% натуральное"}
                    text={"всегда качественная продукция"}
                />
                <AboutItem
                    img={"/images/about2.svg"}
                    title={"100% без гмо"}
                    text={"только домашняя продукция"}
                />
                <AboutItem
                    img={"/images/about3.svg"}
                    title={"100% оперативно"}
                    text={"сегодня заказали - завтра забрали"}
                />
            </div>
        </section>
    )
}