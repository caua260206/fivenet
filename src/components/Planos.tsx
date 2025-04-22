import { Icon } from "@iconify/react/dist/iconify.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Planos() {

    const planos = [
        {
            mega: "300",
            beneficios: [
                { icon: `mdi:wifi`, text: `Super WIFI` },
                { icon: `mdi:tools`, text: `Instalação Grátis` },
                { icon: `mdi:lan`, text: `100% Fibra Óptica` },
                { icon: `mdi:television-classic`, text: `+WATCH TV HUB` },
            ],
            valor: "99,90",
        },
        {
            mega: "500",
            beneficios: [
                { icon: `mdi:wifi`, text: `Super WIFI` },
                { icon: `mdi:tools`, text: `Instalação Grátis` },
                { icon: `mdi:lan`, text: `100% Fibra Óptica` },
                { icon: `mdi:television-classic`, text: `+WATCH TV UP FUN` },
            ],
            valor: "109,90",
        },
        {
            mega: "600",
            beneficios: [
                { icon: `mdi:wifi`, text: `Super WIFI` },
                { icon: `mdi:tools`, text: `Instalação Grátis` },
                { icon: `mdi:lan`, text: `100% Fibra Óptica` },
                { icon: `mdi:television-classic`, text: `+WATCH TV UP FUN` },
            ],
            valor: "139,90",
        },
        {
            mega: "800",
            beneficios: [
                { icon: `mdi:wifi`, text: `Super WIFI` },
                { icon: `mdi:tools`, text: `Instalação Grátis` },
                { icon: `mdi:lan`, text: `100% Fibra Óptica` },
                { icon: `mdi:television-classic`, text: `+WATCH TV UP FUN` },
            ],
            valor: "139,90",
        },
        {
            mega: "1000",
            beneficios: [
                { icon: `mdi:wifi`, text: `Super WIFI 6 AX3000` },
                { icon: `mdi:tools`, text: `Instalação Grátis` },
                { icon: `mdi:lan`, text: `100% Fibra Óptica` },
                { icon: `mdi:television-classic`, text: `+WATCH TV UP FUN` },
            ],
            valor: "169,90",
        },  

    ]

    return (
        <div className="py-20 xl:px-20 px-8">
            <p className="text-4xl">Planos de <b>Internet</b></p>
            <div className="bg-gradient-to-r from-primary to-transparent w-60 h-1 mt-4"></div>

            <div className="mt-8 flex justify-center items-center   ">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    className="flex flex-col justify-center items-center"
                    navigation
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {planos.map((plano, index) => (
                        <SwiperSlide className="flex flex-col justify-center items-center" key={index}>
                            <div className="flex justify-center items-center">
                                <div className="w-96 bg-gradient-to-br drop-shadow-3xl flex flex-col justify-center items-center inset-shadow-white shadow-white/20 from-[#182E89] rounded-2xl border-2 border-[#3B4E96] to-[#001158] px-4 py-8">
                                    <p className="font-bold text-5xl">{plano.mega}<span className="font-light">Mb</span></p>
                                    <ul className="my-8 space-y-6 flex justify-center items-center flex-col text-white">
                                        {plano.beneficios.map((beneficio, i) => (
                                            <li key={i} className="flex flex-row items-center gap-2 text-md"><Icon fontSize={24} className="text-primary" icon={beneficio.icon} />{beneficio.text}</li>
                                        ))}
                                    </ul>
                                    <p className="text-white text-xs font-light">R$<span className="text-5xl font-bold">{plano.valor}</span></p>
                                    <p className="text-xs text-white mt-4 text-center">*Acrescente HBO Max ao seu plano por apenas R$ 15,00/mês (Plano Standard)*</p>
                                    <button className="px-10 py-2 bg-[#008FDF] flex flex-row items-center gap-2 rounded-2xl mt-4"><Icon className="text-white" icon={`mdi:thunder-outline`} />Assine rápido</button>
                                    <button className="px-10 py-2 bg-primary flex flex-row items-center gap-2 rounded-2xl mt-4"><Icon className="text-white" icon={`mdi:whatsapp`} />Assine Já</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-12 space-y-4">
                <p>*Somos parceiros da Watch Brasil®, líder em entretenimento digital. Para aproveitar a Watch TV e outras plataformas incluídas nos pacotes, como Paramount+ e HBO MAX, é importante garantir que seu dispositivo (TV ou celular) seja compatível com o aplicativo.*</p>
                <p>*Canais locais estão sujeitos à disponibilidade de cobertura. Alguns canais poderão ser substituídos ou suspensos por questões de ordem técnica e/ou comercial junto às programadoras, e os clientes serão previamente informados.*</p>
                <p>*Consulte condições, planos, pacotes e viabilidade técnica.*</p>
            </div>
        </div>
    )
}
