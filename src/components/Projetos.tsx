export default function ProjetosSection() {

    const projetos = [
        {
            title: 'Fornecimento de Internet para a Obra de Captação até Barueri',
            text: "Nossa empresa, como provedora de internet, tem orgulho de atender toda a obra no fornecimento de internet, desde a captação até a cidade de Barueri. Durante a execução do projeto, garantimos conectividade estável e de alta velocidade, essencial para a comunicação e coordenação das operações em todas as etapas. Desde a instalação de infraestrutura de rede até o suporte técnico contínuo, nosso papel foi crucial para assegurar que todos os aspectos da obra fossem conduzidos de maneira eficiente e sem interrupções. Esta parceria reforça nosso compromisso com a excelência e a inovação, proporcionando soluções tecnológicas que apoiam o desenvolvimento e o sucesso de grandes projetos na nossa comunidade.",
            image: "/images/projeto1.jpg",
            reverse: true,
        },
        {
            title: 'EXPANSÃO DA LINHA 8 DIAMANTE DA CPTM',
            text: "A expansão da Linha 8-Diamante da CPTM representa um avanço significativo na mobilidade urbana de São Paulo, e nossa empresa, como provedora de internet, tem orgulho de participar deste importante projeto. Contribuímos ativamente com a instalação de infraestrutura de rede de alta velocidade, garantindo conectividade estável e eficiente para as operações dos sistemas de sinalização e controle de tráfego. Essa expansão não só facilitará o deslocamento diário de milhares de passageiros, mas também promoverá o desenvolvimento socioeconômico nas áreas atendidas, refletindo nosso compromisso com a melhoria contínua dos serviços de transporte e com o bem-estar da comunidade.",
            image: "/images/projeto2.jpeg", // ajuste a imagem correta
            reverse: false,
        },
        {
            title: 'EVENTO GLOBO - Copa América de Downhill',
            text: "Nossa empresa teve a honra de participar do evento 'Globo – Copa América de Downhill', um dos maiores e mais emocionantes eventos de esportes radicais da América Latina. Como provedora oficial de internet, fornecemos conectividade de alta velocidade para todas as áreas do evento, garantindo que organizadores, participantes e público pudessem compartilhar a adrenalina e as emoções em tempo real.",
            image: "/images/projeto3.jpg", // ajuste a imagem correta
            reverse: true,
        },
        {
            title: 'Obra: NEOPAV - Duplicação da Rodovia Raposo Tavares - Em Andamento',
            text: "Nossa empresa desempenha um papel crucial na obra de duplicação da Rodovia Raposo Tavares, fornecendo internet nos canteiros de obras entre São Roque e Mairinque. Garantimos conectividade estável e de alta velocidade para pontos de moradia e engenharia, facilitando a comunicação eficiente entre as equipes e o monitoramento preciso do progresso do projeto. Esta infraestrutura tecnológica avançada não apenas otimiza as operações diárias, mas também reafirma nosso compromisso com a qualidade e a eficiência na execução de projetos de infraestrutura viária de grande porte.",
            image: "/images/projeto4.png", // ajuste a imagem correta
            reverse: false,
        },
  
    ];

    return (
        <div className="py-20 px-8">
            {projetos.map((projeto, index) => (
                <div 
                    key={index}
                    className={`flex flex-col ${projeto.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-12 mb-16`}
                >
                    <div className="lg:w-1/2 flex flex-col justify-center max-lg:items-center">
                        <p className="font-bold text-2xl text-white">{projeto.title}</p>
                        <p className="mt-4 text-white">{projeto.text}</p>
                        <button className="mt-6 px-8 py-3 bg-primary text-white font-bold rounded-lg w-fit">
                            SAIBA MAIS
                        </button>
                    </div>

                    <div className="lg:w-1/2">
                        <img className="rounded-xl max-w-full w-full h-auto" src={projeto.image} alt={projeto.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}
