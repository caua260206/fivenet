export default function ProjetosSection() {
    const projetos = [
        {
            title: 'Muito mais que Internet...',
            text: `A provedora de banda larga NetCintra Telecom anunciou a parceria com o Instituto Escola Conectada, voltado à instalação de conectividade na rede pública de ensino.

A ONG já contava com as operadoras Sumicity, Telecall, Ligue Telecom, SOW, NetCintra, Telium e EAI Telecom (Rline) entre as apoiadoras, além da fundadora do projeto, a Datora Telecom. Mais de 56 mil estudantes em quase 100 escolas já teriam sido beneficiados pela iniciativa.

A NetCintra Telecom passou a conectar gratuitamente doze escolas na cidade de Vargem Grande Paulista (SP). A ação teve início em janeiro, antes do anúncio oficial, e terá uma duração de três anos, com impacto para mais de 7 mil alunos.`,
            image: "/images/escola-conectada.jpg",
            reverse: true,
        },
    ];

    return (
    <div className="py-20 max-lg:py-10 px-8">
        <div className="mb-16">
            <h2 className="text-white text-3xl font-semibold mb-2">
                Saiba mais sobre o que fazemos
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent" />
        </div>

        {projetos.map((projeto, index) => (
            <div 
                key={index}
                className={`flex flex-col ${projeto.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-12 mb-16`}
            >
                <div className="lg:w-1/2 flex flex-col justify-center max-lg:items-center">
                    <p className="font-bold text-2xl text-white">{projeto.title}</p>
                    <p className="mt-4 text-white whitespace-pre-line">{projeto.text}</p>
                </div>

                <div className="lg:w-1/2">
                    <img className="rounded-xl max-w-full w-full h-auto" src={projeto.image} alt={projeto.title} />
                </div>
            </div>
        ))}
    </div>
);

}
