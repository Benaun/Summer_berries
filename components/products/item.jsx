import Image from "next/image";

export default function Item({ src, title, price }) {
    return (
        <div className="flex flex-col w-5/6 md:max-xl:w-1/3 xl:w-1/4 rounded-lg bg-white">
            <Image
                src={src}
                width={0}
                height={0}
                alt="Image"
                sizes="100vh"
                className=" w-auto h-[320px] rounded-t-lg mb-4"
            />
            <div className="flex flex-col pl-4 pb-6 gap-2">
                <h3 className=" text-3xl text-black font-normal">
                    {title}
                </h3>
                <p className=" text-lg text-[#910208] font-normal tracking-[2.5px] mb-1">
                    от {price} РУБ/КГ
                    <span className="text-2xl">&#8432;</span>
                </p>
                <p className=" text-md text-black font-normal">
                    <span className="text-md text-[#910208]">*</span> актуальная цена в день заказа
                </p>
            </div>
        </div>
    )
}