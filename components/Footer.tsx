import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { telegram, whatsApp } from "@/constats";

export default function Footer() {
    return (
        <footer className="font-main w-full bg-[#362D6C] pt-2">
            <section className="container mx-auto full flex items-center justify-between">
                <div className="w-[30px] h-[30px] md:w-[53px] md:h-[57px]">
                    <Image
                        width={0}
                        height={0}
                        src="/info/logo.png"
                        alt="Logo"
                        sizes="100vw"
                        className=" w-full h-auto"
                    />
                </div>
                <Link href={"https://github.com/Benaun"} target="_blank">
                    <h3 className=" text-sm text-center md:text-base font-normal text-white">
                        &copy; 2024 Andrey Kharitonov | All Rights Reserved
                    </h3>
                </Link>
                <div className="flex gap-2 md:gap-5">
                    <Link href={`${whatsApp}`} target="_blank">
                        <FaWhatsapp
                            size={23}
                            fill={"#fff"}
                            className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                        />
                    </Link>
                    <Link href={`${telegram}`} target="_blank">
                        <FaTelegramPlane
                            size={23}
                            fill={"#fff"}
                            className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                        />
                    </Link>
                </div>
            </section>
        </footer>
    )
}