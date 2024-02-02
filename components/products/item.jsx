import Image from "next/image";

export default function Item({src, title, price}) {
    return (
        <div className="flex flex-col w-1/4 rounded-lg bg-white">
            <Image
                src={src}
                width={380}
                height={318}
                alt="Image"
                sizes="100vh"
                className=" w-full h-auto rounded-t-lg mb-4"
            />
            <div className="flex flex-col pl-4 pb-10 gap-2">
                <p className=" text-base text-[#910208] font-normal tracking-[2.5px]">
                    от {price} РУБ/КГ
                    <span className="text-2xl">&#8432;</span>
                </p>
                <h3 className=" text-xl text-black font-normal">
                    {title}
                </h3>
            </div>
        </div>
    )
}