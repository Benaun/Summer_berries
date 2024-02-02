import { Montserrat } from "next/font/google";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const main = Montserrat({
    weight: '400',
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export default function Footer() {
    return (
        <footer className={`${main.variable} font-main flex justify-center w-full bg-[#362D6C]`}>
            <section className="flex w-full p-10 justify-between items-center">
                <div className=" w-[73px] h-[67px]">
                    <Image
                        width={0}
                        height={0}
                        src="/images/logo.png"
                        alt="Logo"
                        sizes="100vw"
                        className=" w-full h-auto"
                    />
                </div>
                <Link href={"https://github.com/Benaun"} target="_blank">
                    <h3 className=" text-base font-normal text-white">
                        &copy; 2024 Andrey Kharitonov | All Rights Reserved
                    </h3>
                </Link>
                <div className="flex gap-5">
                    <Link href={"https://wa.me/11111111"} target="_blank">
                        <FaWhatsapp
                            size={25}
                            fill={"#fff"}
                            className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                        />
                    </Link>
                    <Link href={"https://t.me/lesia555"} target="_blank">
                        <FaTelegramPlane
                            size={25}
                            fill={"#fff"}
                            className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                        />
                    </Link>
                </div>
            </section>
        </footer>
    )
}