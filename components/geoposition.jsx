"use client"

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"

export default function Geoposition() {
    const defaultState = {
        center: [45.042295, 41.981338],
        zoom: 18,
    };
    return (
        <section className=" w-full bg-[#DFD6E8] pt-5 md:pt-10">
            <div className="container mx-auto">
                <div className="flex flex-col text-center gap-3 md:gap-5 pb-3 md:pb-10">
                    <h2 className="h3 md:h2 font-medium text-[#362D6C]">
                        Где мы находимся
                    </h2>
                    <p className="p text-[#362d6c] underline">
                        г. Ставрополь, ул. Комсомольская 35 (рядом магазин 1001 Мелочь)
                    </p>
                </div>
                <div className="w-full flex justify-center pb-7 md:pb-20">
                    <div className="w-[350px] h-[250px] sm:w-[600px] sm:h-[350px] xl:w-[1200px] xl:h-[500px]">
                        <YMaps>
                            <Map defaultState={defaultState} width={"100%"} height={"100%"}>
                                <Placemark geometry={[45.042295, 41.981338]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </section>
    )
}
