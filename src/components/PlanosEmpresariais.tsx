import { Icon } from "@iconify/react";

export default function PlanosEmpresariais() {
    const planos = [
        {
            titulo: "Planos Empresariais",
            descricao: "Conectividade e atendimento especializado para pequenos negócios e MEIs.",
            beneficios: [
                { icon: `mdi:check-bold`, text: `Atendimento Especializado` },
                { icon: `mdi:check-bold`, text: `SLA de 24 horas` },
                { icon: `mdi:check-bold`, text: `IP Público Fixo` },
            ],
        },
        {
            titulo: "Planos Corporativos",
            destaque: "Ideal para sua empresa",
            descricao: "Planos personalizados e soluções eficientes para empresas de médio e grande porte.",
            beneficios: [
                { icon: `mdi:check-bold`, text: `Atendimento Especializado` },
                { icon: `mdi:check-bold`, text: `SLA de 12 horas` },
                { icon: `mdi:check-bold`, text: `IP Público Fixo` },
            ],
        },
        {
            titulo: "Link Dedicado",
            descricao: "Tecnologia robusta para atender às demandas específicas do seu negócio.",
            beneficios: [
                { icon: `mdi:check-bold`, text: `SLA de 4 horas` },
                { icon: `mdi:check-bold`, text: `IP Público (Barramento /30)` },
                { icon: `mdi:check-bold`, text: `Projetos que atendem a sua necessidade` },
            ],
        },
    ];

    return (
        <div className="py-20 xl:px-20 px-8 max-lg:text-center">
            {/* Layout dos cards */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
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
                            <p className="text-white text-sm mb-8">{plano.descricao}</p>

                            <ul className="mb-8 space-y-6 flex justify-center items-center flex-col text-white">
                                {plano.beneficios.map((beneficio, i) => (
                                    <li key={i} className="flex flex-row items-center gap-2 text-md">
                                        <Icon fontSize={24} className="text-primary" icon={beneficio.icon} />
                                        {beneficio.text}
                                    </li>
                                ))}
                            </ul>

                            <button className="px-10 py-2 bg-[#008FDF] flex flex-row items-center gap-2 rounded-2xl mt-4">
                                <Icon className="text-white" icon={`mdi:thunder-outline`} />
                                Assine Rápido
                            </button>
                            <a href="https://api.whatsapp.com/send?phone=551141581928&text=Ol%C3%A1!%20Vim%20do%20site" target="_blank" rel="noopener noreferrer">
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
