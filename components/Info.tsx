"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import AnimationShape from "./AnimationShape";
import Header from "./Header";

export default function Info() {
  return (
    <section className="h-[500px] lg:h-[800px] relative ">

      <Header />

      {/* Info */}
      <div className="w-full h-full bg-[#DFD6E8]">
        <div className="container mx-auto h-full">
          <div className="relative z-20 h-full xl:max-w-[800px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
            <p className="p uppercase max-w-[476px]">
              100% натуральные
            </p>

            <h1 className="h1 mb-4 text-accent max-w-[400px] xl:max-w-none">
              <span>Всегда самые свежие</span>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["фрукты", 2000, "ягоды", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={false}
                className="text-red-400 ml-2 xl:ml-4"
              />
            </h1>

            <p className="p uppercase max-w-[476px]">
              Лучшие цены для наших клиентов
            </p>
          </div>

          {/* image */}
          <div className="hidden xl:flex w-[60vw] h-[800px] absolute top-0 right-[3vw]">
            <div className="absolute w-[650px] h-[700px] bottom-0 right-0">
              <Image
                src="/info/Main.png"
                fill
                quality="100"
                priority
                alt="Summer Berries"
                className="object-contain"
              />
            </div>

            {/* Animation */}
            <div className="absolute top-[130px] left-[15vw]">
              <AnimationShape
                content={
                  <Image
                    src="/info/1.png"
                    width={150}
                    height={150}
                    alt='raspberry'
                  />
                }
                duration={1}
              />
            </div>
            <div className="absolute top-[650px] left-[27vw]">
              <AnimationShape
                content={
                  <Image
                    src="/info/2.png"
                    width={100}
                    height={100}
                    alt='strawberry'
                  />
                }
                duration={1.4}
              />
            </div>
            <div className="absolute top-[200px] xl:left-[50vw]">
              <AnimationShape
                content={
                  <Image
                    src="/info/3.png"
                    width={150}
                    height={150}
                    alt='raspberry'
                  />
                }
                duration={1.2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}