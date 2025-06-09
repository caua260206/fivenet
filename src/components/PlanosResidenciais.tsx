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
                { icon: "mdi:netflix", text: "HBO Max por mais R$15,00", imagePath: "/images/max.png" },
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
                { icon: "mdi:netflix", text: "HBO Max por mais R$15,00", imagePath: "/images/max.png" },
            ],
        },
    ];

    return (
        <div className="flex gap-16 max-lg:flex-col max-lg:items-center justify-center">
            {planosBase.map((plano, index) => (
                <PlanoCard key={index} planoBase={plano} />
            ))}
        </div>
    );
}

const PlanoCard = ({ planoBase }: { planoBase: PlanoBase }) => {
    const [modalContent, setModalContent] = useState<{ text?: string; image?: string } | null>(null);

    const handleBenefitClick = (beneficio: Beneficio) => {
        if (beneficio.text === "TV Watch Up-Cinema") {
            setModalContent({ image: "/images/Hub.png" });
        } else {
            const info: { [key: string]: string } = {
                "Super Wi-Fi": "O Super Wi-Fi oferece um roteador de última geração com tecnologia avançada de distribuição de sinal, garantindo cobertura completa em todos os cômodos da sua residência. Ideal para múltiplos dispositivos conectados ao mesmo tempo, sem quedas de conexão ou perda de velocidade.",
                "Super Wi-Fi 6": "Com o Super Wi-Fi 6, você terá acesso à tecnologia mais moderna em redes sem fio, com maior velocidade de transferência de dados, menor latência e mais estabilidade mesmo em ambientes com muitos dispositivos conectados simultaneamente. Perfeito para casas inteligentes e gamers exigentes.",
                "HBO Max por mais R$15,00": "Tenha acesso ao catálogo completo da HBO Max com um acréscimo de apenas R$15,00 por mês. Aproveite filmes recentes, séries exclusivas, conteúdo infantil e documentários renomados em uma das plataformas de streaming mais populares do mundo.",
            };
            setModalContent({ text: info[beneficio.text] || "Mais informações em breve." });
        }
    };

    const closeModal = () => setModalContent(null);

    const getWhatsAppMessage = () =>
        encodeURIComponent(`Olá! Vim do site e tenho interesse no plano de ${planoBase.speed}mega`);

    return (
        <>
            <div className="flex justify-center">
                <div className="w-[22rem] px-8 border-2 hover:-translate-y-1 hover:duration-500 group hover:border-[#FF6600] duration-600 py-7 flex flex-col bg-[#4605bc] border-white relative rounded-3xl">
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
                        {planoBase.apps.map((app, idx) => (
                            <img key={idx} className="h-9" src={app.image} alt="App" />
                        ))}
                    </div>

                    <div className="w-14 h-[2px] bg-white mt-5" />
                    <ul className="mt-5 flex flex-col gap-4">
                        {planoBase.beneficios.map((beneficio, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleBenefitClick(beneficio)}
className="flex flex-row items-center gap-3 text-sm text-white cursor-pointer underline"
                            >
                                {beneficio.imagePath ? (
                                    <img src={beneficio.imagePath} alt={beneficio.text} className="h-9 w-9 rounded-full bg-[#FF6600] p-2 object-contain" />
                                ) : (
                                    <Icon icon={beneficio.icon} fontSize={22} className="bg-[#FF6600] text-[#17004a] h-9 w-9 p-2 rounded-full object-contain" />
                                )}
                                {beneficio.text}
                            </li>
                        ))}
                    </ul>

                    <p className="text-white font-bold text-center text-4xl mt-6 -mb-5">
                        R${parseFloat(planoBase.value.replace(',', '.')).toFixed(2).replace('.', ',')}<span className="text-lg">/mês</span>
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

            {/* MODAL */}
            {modalContent && (
                <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative ${modalContent.image ? "bg-black p-0" : "bg-[#001256] p-6"} rounded-xl max-w-md w-full text-center`}
                    >
                        <button
                            onClick={closeModal}
                            className={`absolute top-3 right-5 text-2xl font-bold ${modalContent.image ? "text-white" : "text-black"}`}
                        >
                            ×
                        </button>
                        {modalContent.image ? (
                            <img src={modalContent.image} alt="Benefício" className="w-full h-auto rounded-xl" />
                        ) : (
                            <p className="text-white font-medium whitespace-pre-line">{modalContent.text}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
