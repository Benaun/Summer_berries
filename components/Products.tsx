import Image from "next/image";

interface IProduct {
    id: number,
    img: string,
    title: string,
    price: string
}

export const products: IProduct[] = [
    {
        id: 1,
        img: "/products/malina.jpeg",
        title: "Малина",
        price: "250"
    },
    {
        id: 2,
        img: "/products/ejevika.jpeg",
        title: "Ежевика",
        price: "250"
    },
    {
        id: 3,
        img: "/products/klubnika.jpeg",
        title: "Клубника",
        price: "230"
    },
    {
        id: 4,
        img: "/products/chereshnya.jpeg",
        title: "Черешня",
        price: "230"
    },
    {
        id: 5,
        img: "/products/vishnya.jpeg",
        title: "Вишня",
        price: "150"
    },
    {
        id: 6,
        img: "/products/kizil.jpeg",
        title: "Кизил",
        price: "120"
    },
]

export default function Products() {
    return (
        <section className="relative z-40">
            <div className="container mx-auto mt-40">
                <div className="flex flex-col text-center gap-3 md:gap-5 mb-5 md:mb-10">
                    <h2 className="h3 md:h2 font-medium text-[#362D6C]">
                        Наши товары
                    </h2>
                    <p className="text-xl md:h3 font-normal text-[#362d6c]">
                        Мы предлагаем приобрести
                    </p>
                </div>
                <div className="flex flex-wrap gap-5 md:gap-10">
                    {products?.map((product) =>
                        <div key={product.id} className="flex flex-col w-full md:w-[45%] lg:w-[30%] rounded-lg bg-white">
                            <Image
                                src={product.img}
                                width={0}
                                height={0}
                                alt="Image"
                                sizes="100vh"
                                className=" w-auto h-[320px] rounded-t-lg mb-4"
                            />
                            <div className="flex flex-col pl-4 pb-6 gap-2">
                                <h3 className=" text-3xl text-black font-normal">
                                    {product.title}
                                </h3>
                                <p className=" text-lg text-[#910208] font-normal tracking-[2.5px] mb-1">
                                    от {product.price} РУБ/КГ
                                    <span className="text-2xl">&#8432;</span>
                                </p>
                                <p className=" text-md text-black font-normal">
                                    <span className="text-md text-[#910208]">*</span> актуальная цена в день заказа
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}