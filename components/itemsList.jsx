import Item from "./item";

export default function ItemsList() {
    return (
        <section className="flex flex-col justify-center mb-20">
            <div className="flex flex-col text-center gap-5 mb-10">
                <h3 className=" text-4xl font-medium text-[#362D6C]">
                    Наши товары
                </h3>
                <p className=" text-2xl font-normal text-[#362d6c]">
                    Мы предлагаем приобрести
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </section>
    )
}