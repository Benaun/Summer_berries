import { Montserrat_Alternates } from "next/font/google";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const alternates = Montserrat_Alternates({
  weight: ['600', '700'],
  variable: '--font-montserrat-alternates',
  subsets: ['latin'],
})

export default function Header() {
  return (
    <header className={`${alternates.variable} font-alternative flex justify-center`}>
      <section className="flex w-full px-10 py-5 justify-between items-center">
        <div className=" w-[93px] h-[85px]">
          <Image
            width={0}
            height={0}
            src="/images/logo.png"
            alt="Logo"
            sizes="100vw"
            className=" w-full h-auto"
          />
        </div>
        <h2 className=" text-5xl font-semibold">
          Summer Berries
        </h2>
        <div className="flex gap-5">
          <Link href={"https://wa.me/89187922249"} target="_blank">
            <FaWhatsapp
              size={30}
              fill={"#910208"}
              className="hover:fill-rose-500 ease-in duration-300 cursor-pointer"
            />
          </Link>
          <Link href={"https://t.me/lesia555"} target="_blank">
            <FaTelegramPlane
              size={30}
              fill={"#910208"}
              className="hover:fill-rose-500 ease-in duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </section>
    </header>
  )
}