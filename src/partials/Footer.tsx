import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
    return (
        <div>
            <div className="py-12 max-lg:text-center bg-gradient-to-r flex items-center from-secondary to-blue-900 px-32 gap-20 max-lg:grid-cols-1 max-lg:px-8 grid grid-cols-3">
                <div>
                    <p className="font-bold text-2xl">Quem somos?</p>
                    <p className="mt-3 mb-5">
                        A NETCINTRA Telecom, autorizada pela ANATEL, foi fundada em 2008 para atender Vargem Grande Paulista e região. Estamos expandindo para as principais capitais do Brasil, oferecendo serviços de alta confiabilidade e satisfação. Contamos com mais de 2.500 provedores de conteúdo.
                    </p>
                    <a className="font-bold mt-5 hover:text-orange-500 transition-colors" href="/trabalhe-conosco">Trabalhe conosco</a>
                </div>
                <div>
                    <img src="/images/Logo.png" alt="Logo Netcintra" />
                    <div className="flex justify-center items-center gap-8 mt-4">
                        <a href="https://www.instagram.com/netcintra/" target="_blank" rel="noopener noreferrer">
                            <Icon className="hover:-translate-y-1 duration-300" fontSize={28} icon="mdi:instagram" />
                        </a>
                        <a href="https://www.facebook.com/netcintra" target="_blank" rel="noopener noreferrer">
                            <Icon className="hover:-translate-y-1 duration-300" fontSize={28} icon="mdi:facebook" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5511975358300&text=Ol%C3%A1!%20Vim%20do%20site" target="_blank" rel="noopener noreferrer">
                            <Icon className="hover:-translate-y-1 duration-300" fontSize={28} icon="mdi:whatsapp" />
                        </a>
                    </div>
                </div>
                <div>
                    <ul>
                        <li><a href="/contratos/contrato-prestacao.pdf" target="_blank" rel="noopener noreferrer">Contrato de prestação de serviços</a></li>
                        <li><a href="/contratos/contrato-sva.pdf" target="_blank" rel="noopener noreferrer">Regulamento SVA's</a></li>
                        <li><a href="/contratos/contrato-termo1.pdf" target="_blank" rel="noopener noreferrer">Termo de Concessão Condicional de Benefícios 1</a></li>
                        <li><a href="/contratos/contrato-termo2.pdf" target="_blank" rel="noopener noreferrer">Termo de Concessão Condicional de Benefícios 2</a></li>
                        <li><a href="/contratos/contrato-termo3.pdf" target="_blank" rel="noopener noreferrer">Termo de Concessão Condicional de Benefícios 3</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-primary flex justify-center items-center py-4">
                <p>Desenvolvido por <a className="font-bold">DELIPE.COM</a></p>
            </div>
        </div>
    );
}
