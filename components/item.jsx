import Image from "next/image";

export default function Item() {
    return (
        <div className="flex flex-col w-1/4 rounded-lg bg-white">
            <Image
                src="/images/item-img.png"
                width={380}
                height={318}
                alt="Image"
                sizes="100vh"
                className=" w-full h-auto rounded-t-lg mb-4"
            />
            <div className="flex flex-col pl-4 pb-10 gap-2">
                <p className=" text-base text-[#910208] font-normal tracking-[2.5px]">
                    4550 RUB / КГ
                </p>
                <h3 className=" text-xl text-black font-normal">
                    Малина сублимированная целая
                </h3>
            </div>
        </div>
    )
}