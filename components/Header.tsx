import Link from "next/link";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { telegram, whatsApp } from "@/constats";

export default function Header() {
  return (
    <header className="w-full h-[100px] relative z-30 mt-4">
      <div className="container w-full flex justify-between items-center">
        <Image
          src="/info/logo.png"
          width={100}
          height={100}
          quality="100"
          alt="logo"
          className="w-[93px] h-[85px]"
        />
        <h1 className="h3 xl:h2 font-alternative">
          Summer Berries
        </h1>

        <div className="flex gap-2 md:gap-5">
          <Link href={`${whatsApp}`} target="_blank">
            <FaWhatsapp
              size={40}
              fill={"#910208"}
              className="hover:fill-rose-500 ease-in duration-300 cursor-pointer"
            />
          </Link>
          <Link href={`${telegram}`} target="_blank">
            <FaTelegramPlane
              size={40}
              fill={"#910208"}
              className="hover:fill-rose-500 ease-in duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}