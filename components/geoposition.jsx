import Image from "next/image";

export default function Geoposition() {
    return (
        <section className=" w-full flex flex-col justify-center bg-[#DFD6E8] pt-10">
            <div className="flex flex-col text-center gap-5 mb-10">
                <h3 className=" text-4xl font-medium text-[#362D6C]">
                    Где мы находимся
                </h3>
                <p className="text-2xl font-normal text-[#362d6c]">
                    месторасположение
                </p>
            </div>
            <div className="w-full flex justify-center mb-20">
                <div className="w-[1200px] h-[500px]">
                    <Image
                        src="/images/Map.png"
                        width={0}
                        height={0}
                        alt="Map"
                        sizes="100vh"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}