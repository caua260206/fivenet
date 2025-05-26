export default function ProjetosSection() {
    const projetos = [
        {
            title: 'Projeto Internet para São Roque',
            text: `Agosto de 2017

A provedora de banda larga NetCintra Telecom anunciou parceria com a Prefeitura da Estância Turística de São Roque. A parceria consiste em ceder a Torre da Pedreira e disponibilizar internet a pontos sem infraestrutura, como os bairros de Mailasqui, Canguera, Caetê e Jardim Maria Trindade, com atendimento para escolas e postos de saúde.

A NetCintra Telecom atendeu cerca de dezoito pontos, beneficiando diretamente os munícipes dessas regiões.

Fonte: Prefeitura da Estância Turística de São Roque`,
            image: "/images/projeto1.jpg",
            reverse: true,
        },
        {
            title: 'Projeto Internet para Ibiúna',
            text: `Maio de 2015

A provedora de banda larga NetCintra Telecom anunciou parceria com a Prefeitura da Estância Turística de Ibiúna. A parceria consiste em ceder a Torre da Figueira e disponibilizar internet a pontos sem infraestrutura, como os bairros Centro, Jardim Europa, Cachoeira, Tavares, Feital e Curral, com atendimento para pontos como a Prefeitura e o CRAS.

A NetCintra Telecom atende aos bairros entregando conexão banda larga diretamente aos munícipes dessas regiões.

Fonte: Prefeitura da Estância Turística de Ibiúna`,
            image: "/images/projeto2.jpeg",
            reverse: false,
        },
    ];

    return (
        <div className="-mt-10 max-lg:mt-0 px-8">
            <div className="mb-16">
                <h2 className="text-white text-3xl font-semibold mb-2">Projetos</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent" />
            </div>

            {projetos.map((projeto, index) => (
    <div 
        key={index}
        className={`flex flex-col-reverse ${projeto.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-16 mb-28`}
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

        </div>
    );
}
