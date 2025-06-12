import { Icon } from "@iconify/react";

export default function PlanosEmpresariais() {
    const planos = [
        {
            titulo: "PLANO EMPRESARIAL", // Nome alterado
            descricao: "Ideal para MEI, Pequenas e Médias Empresas.", // Nova descrição
            beneficios: [
                { icon: `mdi:check-bold`, text: `100% Fibra Óptica` }, // Novo benefício
                { icon: `mdi:check-bold`, text: `SLA 24 Horas` },     // Benefício ajustado
                { icon: `mdi:check-bold`, text: `Atendimento especializado` }, // Benefício ajustado
            ],
        },
        {
            titulo: "PLANO CORPORATIVO", // Nome alterado
            destaque: "Ideal para sua empresa",
            descricao: "Ideal para Médias Empresas e Soluções Empresariais.", // Nova descrição
            beneficios: [
                { icon: `mdi:check-bold`, text: `100% Fibra Óptica` }, // Novo benefício
                { icon: `mdi:check-bold`, text: `IP Fixo*` },           // Novo benefício
                { icon: `mdi:check-bold`, text: `SLA 24 Horas` },     // Benefício ajustado
                { icon: `mdi:check-bold`, text: `Atendimento especializado` }, // Benefício ajustado
            ],
        },
        {
            titulo: "PLANO SEMI-DEDICADO", // Novo plano
            descricao: "Ideal para Médias e Grandes Empresas, Soluções Empresariais.", // Nova descrição
            beneficios: [
                { icon: `mdi:check-bold`, text: `100% Fibra Óptica` },
                { icon: `mdi:check-bold`, text: `IP Fixo*` },
                { icon: `mdi:check-bold`, text: `Banda Simétrica` },
                { icon: `mdi:check-bold`, text: `SLA 12 Horas` },
                { icon: `mdi:check-bold`, text: `Atendimento prioritário e ágil.` },
            ],
        },
        {
            titulo: "PLANO DEDICADO", // Nome alterado
            descricao: "Ideal para Médias e Grandes Empresas.\nPlanos até 10Gb sob medida para atender a sua necessidade.", // Nova descrição
            beneficios: [
                { icon: `mdi:check-bold`, text: `100% Fibra Óptica` },
                { icon: `mdi:check-bold`, text: `IP Fixo*` },
                { icon: `mdi:check-bold`, text: `Banda Simétrica` },
                { icon: `mdi:check-bold`, text: `SLA 4 Horas` },
                { icon: `mdi:check-bold`, text: `Atendimento prioritário e ágil.
` },
            ],
        },
    ];

    return (
        <div className="mt-14 xl:px-5 px-8 max-lg:text-center">
            {/* Layout dos cards */}
            {/* O grid-cols-3 foi alterado para grid-cols-2 md:grid-cols-4 para acomodar os 4 planos e manter a responsividade */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start">
                {planos.map((plano, index) => (
                    <div className="flex justify-center text-center items-center" key={index}>
                        <div className="w-96 bg-gradient-to-br drop-shadow-3xl flex flex-col justify-center items-center inset-shadow-white shadow-white/20 from-[#182E89] rounded-2xl border-2 border-[#3B4E96] to-[#001158] px-6 py-10 relative">

                            {/* Destaque */}
                            {plano.destaque && (
                                <div className="absolute top-0 -translate-y-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm">
                                    {plano.destaque}
                                </div>
                            )}

                            <p className="font-bold text-2xl text-white mb-4">{plano.titulo}</p>
                            {/* Pré-formatar a descrição para quebras de linha funcionem */}
                            <p className="text-white text-sm mb-8 whitespace-pre-line">{plano.descricao}</p>

                            <ul className="mb-8 space-y-6 flex justify-center items-center flex-col text-white">
                                {plano.beneficios.map((beneficio, i) => (
                                    <li key={i} className="flex flex-row items-center gap-2 text-md">
                                        <Icon fontSize={24} className="text-primary" icon={beneficio.icon} />
                                        {beneficio.text}
                                    </li>
                                ))}
                            </ul>

                            <a href="/assine-rapido-empresarial">
                                <button className="px-10 py-2 bg-[#008FDF] flex flex-row items-center gap-2 rounded-2xl mt-4">
                                    <Icon className="text-white" icon={`mdi:thunder-outline`} />
                                    Assine Rápido
                                </button>
                            </a>

                            <a href="https://api.whatsapp.com/send?phone=5511975358300&text=Ol%C3%A1!%20Vim%20do%20site" target="_blank" rel="noopener noreferrer">
                                <button className="px-10 py-2 bg-primary hover:bg-secondary duration-300 cursor-pointer flex flex-row items-center gap-2 rounded-2xl mt-4">
                                    Contratar
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
