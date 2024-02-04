import Item from "./item";
import { products } from "@/products";

export default function ItemsList() {
    return (
        <section className="flex flex-col justify-center mb-10 md:mb-20">
            <div className="flex flex-col text-center gap-3 md:gap-5 mb-5 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-medium text-[#362D6C]">
                    Наши товары
                </h2>
                <p className="text-xl md:text-2xl font-normal text-[#362d6c]">
                    Мы предлагаем приобрести
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
                {products?.map((product) =>
                    <Item
                        key={product.id}
                        src={product.img}
                        price={product.price}
                        title={product.title}
                    />
                )}
            </div>
        </section>
    )
}