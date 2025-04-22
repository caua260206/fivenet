import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Empresarial() {

    const logos = [
        { image: "/images/logo1.png" },
        { image: "/images/logo2.png" },
        { image: "/images/logo3.png" }, 
        { image: "/images/logo4.png" },
        { image: "/images/logo5.png" },
        { image: "/images/logo6.png" },
        { image: "/images/logo7.png" },
        { image: "/images/logo8.png" },
        { image: "/images/logo9.png" },
        { image: "/images/logo10.png" },
        { image: "/images/logo11.png" },
        { image: "/images/logo12.png" },
        { image: "/images/logo13.png" },
        { image: "/images/logo14.png" },
        { image: "/images/logo15.png" },
        { image: "/images/logo16.png" },
        { image: "/images/logo17.png" },
        { image: "/images/logo18.png" },
        { image: "/images/logo19.png" },
        { image: "/images/logo20.png" },
        { image: "/images/logo21.png" },
        { image: "/images/logo22.png" },
        { image: "/images/logo23.png" },
    ]

    return (
        <div className="xl:px-20 px-8 py-12 text-white">
            <h2 className="text-4xl">As melhores ofertas para sua <b>empresa</b></h2>
            <div className="bg-gradient-to-r from-primary to-transparent w-60 h-1 mt-4 mb-12"></div>

            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Imagem */}
                <div className="xl:w-1/2">
                    <img 
                        src="/images/empresas.jpg" 
                        alt="Homem usando tablet" 
                        className="rounded-2xl w-full max-w-2xl"
                    />
                </div>

                {/* Texto */}
                <div className="flex-1">
                    <p className="mb-6">
                        A <b>NETCINTRA Telecom</b> oferece Links Dedicados de alta disponibilidade e desempenho, ideais
                        para Pequenas, Médias e Grandes Empresas. Com velocidade simétrica e máxima qualidade,
                        nossos Links Dedicados garantem total confiança e tranquilidade para suas operações,
                        tornando-as mais profissionais e eficientes.
                    </p>

                    <p className="mb-8">
                        Visamos a excelência na prestação de serviços e produtos, proporcionando a qualidade que
                        sua empresa merece. Nosso atendimento humanizado e ágil assegura um suporte diferenciado,
                        atendendo todas as suas necessidades com rapidez e eficácia.
                    </p>

                    {/* Ícones */}
                    <div className="flex items-center gap-10 mb-8">
                        <div className="flex items-center gap-2">
                            <Icon icon="mdi:wifi" className="text-primary text-3xl" />
                            <span className="font-bold">Wi-fi <b>Veloz</b></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="mdi:cable-data" className="text-primary text-3xl" />
                            <span className="font-bold">Link <b>Dedicado</b></span>
                        </div>
                    </div>

                    {/* Botão */}
                    <button className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-orange-500 transition">
                        FALE AGORA COM UM CONSULTOR
                    </button>
                </div>
            </div>

            <div className='mt-20'>
                <h2 className="text-4xl">Empresas <b>Atendidas</b></h2>
                <div className="bg-gradient-to-r from-primary to-transparent w-60 h-1 mt-4 mb-12"></div>
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
                            slidesPerView: 7,
                        }
                    }}
                >
                    {logos.map((logo, index) => (
                        <div className='flex justify-center items-center'>
                            <SwiperSlide className="flex flex-col justify-center items-center" key={index}>
                                <div className='flex justify-center items-center'>
                                    <img src={`${logo.image}`} alt="" />
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
