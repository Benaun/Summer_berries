import Item from "./item";
import { products } from "@/products";

export default function ItemsList() {
    return (
        <section className="flex flex-col justify-center mb-20">
            <div className="flex flex-col text-center gap-5 mb-10">
                <h2 className=" text-4xl font-medium text-[#362D6C]">
                    Наши товары
                </h2>
                <p className=" text-2xl font-normal text-[#362d6c]">
                    Мы предлагаем приобрести
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
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