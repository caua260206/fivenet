import { Icon } from "@iconify/react";
import { useState } from "react";

interface App {
    image: string;
}

interface Beneficio {
    icon: string;
    text: string;
    imagePath?: string;
}

interface PlanoBase {
    id: number;
    name: string;
    speed: string;
    apps: App[];
    value: string;
    beneficios: Beneficio[];
}

export default function PlanosResidenciais() {
    const planosBase: PlanoBase[] = [
        {
            id: 2,
            name: "Plano Ultra",
            speed: "500",
            apps: [
                { image: "/images/Paramount.png" },
                { image: "/images/Band News.png" },
                { image: "/images/Bandsports.png" },
                { image: "/images/Globo.png" },
                { image: "/images/Cnn.png" },
            ],
            value: "99,90",
            beneficios: [
                { icon: "mdi:wifi", text: "Super Wi-Fi", imagePath: "/images/wifi.svg" },
                { icon: "mdi:television", text: "TV Watch Up-Cinema", imagePath: "/images/tv.svg" },
                { icon: "mdi:netflix", text: "HBO Max por mais R$15,00", imagePath: "/images/max.png" }
            ],
        },
        {
            id: 3,
            name: "Plano Ultra",
            speed: "600",
            apps: [
                { image: "/images/Hbo.png" },
                { image: "/images/Telecine.png" },
                { image: "/images/SportTv.png" },
                { image: "/images/Multishow.png" },
                { image: "/images/Globo.png" },
                { image: "/images/Gnt.png" },
            ],
            value: "139,90",
            beneficios: [
                { icon: "mdi:wifi", text: "Super Wi-Fi 6", imagePath: "/images/wifi.svg" },
                { icon: "mdi:television", text: "TV Watch Up-Cinema", imagePath: "/images/tv.svg" },
            ],
        },
        {
            id: 1,
            name: "Plano Ultra",
            speed: "1000",
            apps: [
                { image: "/images/Telecine.png" },
                { image: "/images/SportTv.png" },
                { image: "/images/Multishow.png" },
                { image: "/images/Globo.png" },
                { image: "/images/Gnt.png" },
            ],
            value: "169,90",
            beneficios: [
                { icon: "mdi:wifi", text: "Super Wi-Fi 6", imagePath: "/images/wifi.svg" },
                { icon: "mdi:television", text: "TV Watch Up-Cinema", imagePath: "/images/tv.svg" },
                { icon: "mdi:netflix", text: "HBO Max por mais R$15,00", imagePath: "/images/max.png" }
            ],
        },
    ];

    return (
        <div className="flex gap-16 max-lg:flex-col max-lg:items-center justify-center">
            {planosBase.map((plano, index) => (
                <PlanoCard key={index} planoBase={plano} index={index} />
            ))}
        </div>
    );
}

const PlanoCard = ({ planoBase, index }: { planoBase: PlanoBase, index: number }) => {
    const [currentPrice, setCurrentPrice] = useState(parseFloat(planoBase.value.replace(',', '.')));

    const getWhatsAppMessage = () => {
        const baseMessage = `Olá! Vim do site e tenho interesse no plano de ${planoBase.speed}mega`;
        return encodeURIComponent(baseMessage);
    };

    return (
        <div className="flex justify-center">
            <div key={index} className="w-[22rem] px-8 border-2 hover:-translate-y-1 hover:duration-500 group hover:border-[#FF6600] duration-600 py-7 flex flex-col bg-[#4605bc] border-white relative rounded-3xl">
                <div className="bg-white py-2 group-hover:bg-[#FF6600] duration-500 absolute right-0 top-0 rounded-tr-2xl rounded-bl-3xl px-6">
                    <p className="text-[#4605bc] uppercase font-bold text-sm">100% Fibra Óptica</p>
                </div>

                <p className="font-bold text-white text-2xl max-lg:mt-7">{planoBase.name}</p>
                <p className="text-[#FF6600] font-bold text-4xl mt-2">
                    <span className="text-6xl text-white">{planoBase.speed}</span>mega
                </p>
                <p className="mt-4 text-white">Seu plano acompanha com:</p>
                <div className="mt-4 flex flex-row items-center gap-2">
                    <img className="h-8" src="/images/maisplanos.svg" alt="Mais planos" />
                    {planoBase.apps.map((app, index) => (
                        <img key={index} className="h-9" src={app.image} alt="App" />
                    ))}
                </div>

                <div className="w-14 h-[2px] bg-white mt-5"></div>
                <ul className="mt-5 flex flex-col gap-4">
                    {planoBase.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex flex-row items-center gap-3 text-sm text-white">
                            {beneficio.imagePath ? (
                                <img src={beneficio.imagePath} alt={beneficio.text} className="h-9 w-9 rounded-full bg-[#FF6600] p-2 object-contain" />
                            ) : (
                                <Icon icon={beneficio.icon} fontSize={22} className="bg-[#FF6600] text-[#17004a] h-9 w-9 p-2 rounded-full object-contain" />
                            )}
                            {beneficio.text}
                        </li>
                    ))}
                </ul>
                <p className={`text-white font-bold text-center text-4xl ${currentPrice === 139.90 ? 'mt-12' : 'mt-6'} -mb-5`}>
                    R${currentPrice.toFixed(2).replace('.', ',')}<span className="text-lg">/mês</span>
                </p>

                <div className="flex justify-center items-center my-6">
                    <a href={`https://api.whatsapp.com/send?phone=5511975358300&text=${getWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#FF6600] hover:bg-[#001256] duration-300 text-1xl flex flex-row items-center py-3 px-10 gap-3 rounded-full text-white font-bold">
                            <img src="/images/energia.svg" alt="Energia" className="h-6 w-6" />
                            Quero ser Netcinta!
                        </button>
                    </a>
                </div>
                <p className="text-center font-light text-sm text-white -mt-3 leading-tight">
                    Consulte condições e viabilidade* <br />
                    Paramount por 1 ano grátis
                </p>
            </div>
        </div>
    );
}
