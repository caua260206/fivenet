export default function ProjetosSection() {
    const projetos = [
        {
            title: 'Muito mais que Internet...',
            text: `A provedora de banda larga NetCintra Telecom anunciou a parceria com o Instituto Escola Conectada, voltado à instalação de conectividade na rede pública de ensino.

A ONG já contava com as operadoras Sumicity, Telecall, Ligue Telecom, SOW, NetCintra, Telium e EAI Telecom (Rline) entre as apoiadoras, além da fundadora do projeto, a Datora Telecom. Mais de 56 mil estudantes em quase 100 escolas já teriam sido beneficiados pela iniciativa.

A NetCintra Telecom passou a conectar gratuitamente doze escolas na cidade de Vargem Grande Paulista (SP). A ação teve início em janeiro, antes do anúncio oficial, e terá uma duração de três anos, com impacto para mais de 7 mil alunos.`,
            image: "/images/escola-conectada.png",
            reverse: false,
        },
        // PROJETO ADICIONADO: São Roque
        {
            title: 'Internet para São Roque',
            text: `Agosto de 2017

A provedora de banda larga NetCintra Telecom anunciou parceria com a Prefeitura da Estância Turística de São Roque. A parceria consiste em ceder a Torre da Pedreira e disponibilizar internet a pontos sem infraestrutura, como os bairros de Mailasqui, Canguera, Caetê e Jardim Maria Trindade, com atendimento para escolas e postos de saúde.

A NetCintra Telecom atendeu cerca de dezoito pontos, beneficiando diretamente os munícipes dessas regiões.

Fonte: Prefeitura da Estância Turística de São Roque`,
            image: "/images/sao_roque.png",
            reverse: true,
        },
        // PROJETO ADICIONADO: Ibiúna
        {
            title: 'Internet para Ibiúna',
            text: `Maio de 2015

A provedora de banda larga NetCintra Telecom anunciou parceria com a Prefeitura da Estância Turística de Ibiúna. A parceria consiste em ceder a Torre da Figueira e disponibilizar internet a pontos sem infraestrutura, como os bairros Centro, Jardim Europa, Cachoeira, Tavares, Feital e Curral, com atendimento para pontos como a Prefeitura e o CRAS.

A NetCintra Telecom atende aos bairros entregando conexão banda larga diretamente aos munícipes dessas regiões.

Fonte: Prefeitura da Estância Turística de Ibiúna`,
            image: "/images/ibiuna.png",
            reverse: false,
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
                    className={`flex flex-col ${projeto.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-12 mb-24`}
                >
                    <div className="lg:w-1/2">
                        <img className="rounded-xl max-w-full w-full h-auto" src={projeto.image} alt={projeto.title} />
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-center max-lg:items-center">
                        <p className="font-bold text-2xl text-white">{projeto.title}</p>
                        <p className="mt-4 text-white whitespace-pre-line">{projeto.text}</p>
                    </div>
                </div>
            ))}

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-5">
                <div className="lg:w-1/2 flex flex-col justify-center max-lg:items-center order-last lg:order-none">
                    <p className="font-bold text-2xl text-white">Fluxograma de Conexões</p>
                    <p className="mt-4 text-white whitespace-pre-line">
                        Este fluxograma ilustra a rede de conexões diretas entre várias empresas e provedores de serviços de internet (ISPs) ao redor do mundo. O ponto central, representado por um ícone laranja, conecta diretamente diversas empresas e organizações a provedores de rede.
                        <br /><br />
                        A centralização desse modelo reflete a importância da infraestrutura direta e das conexões sem intermediários entre grandes empresas globais e locais, como Netflix, Amazon, Google, Facebook, Microsoft, entre outras. As conexões diretas entre esses players são fundamentais para otimizar o tráfego de dados e reduzir custos operacionais.
                    </p>
                </div>

                <div className="lg:w-1/2">
                    <img className="rounded-xl max-w-full w-full h-auto" src="/images/Fluxograma.png" alt="Fluxograma de Conexões" />
                </div>
            </div>
        </div>
    );
}