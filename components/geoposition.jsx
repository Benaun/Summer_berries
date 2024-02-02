import { YMaps, Placemark, Map } from '@pbe/react-yandex-maps'

export default function Geoposition() {
    const defaultState = {
        center: [45.042295, 41.981338],
        zoom: 19,
    };
    return (
        <section className=" w-full flex flex-col justify-center bg-[#DFD6E8] pt-10">
            <div className="flex flex-col text-center gap-5 mb-10">
                <h2 className=" text-4xl font-medium text-[#362D6C]">
                    Где мы находимся
                </h2>
                <p className="text-2xl font-normal text-[#362d6c] underline">
                    г. Ставрополь, ул. Комсомольская 35 (рядом магазин 1001 Мелочь)
                </p>
            </div>
            <div className="w-full flex justify-center mb-20">
                <div className="w-[1200px] h-[500px]">
                    <YMaps>
                        <Map defaultState={defaultState} width={"100%"} height={"100%"}>
                            <Placemark geometry={[45.042295, 41.981338]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}
