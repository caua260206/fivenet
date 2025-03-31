import { Icon } from "@iconify/react";

export default function Header() {
    return(
        <div>

            <div className="flex flex-row items-center justify-between bg-gradient-to-r from-[#001158] to-[#00259D] xl:px-20 px-8 py-3">
                <div>
                    <a className="flex flex-row items-center gap-2" href="#">
                        <Icon icon={`mdi:phone-check`} fontSize={20} className="text-white" />
                        (11) 4158-1928
                    </a>
                </div>
                <div>
                    <ul className="flex flex-row items-center gap-10">
                        <li><a className="flex flex-row items-center gap-2" href="#"><Icon icon={`mdi:map-marker-right`} fontSize={20} />Rua Euclasio, 552/605 - Casablanca - Vargem Grande Paulista / SP</a></li>
                        <li><a className="flex flex-row items-center gap-2" href="#"><Icon icon={`mdi:user-arrow-right`} fontSize={20} />Área do cliente</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-row items-center xl:px-20 px-8 py-7 justify-between">
                <div>
                    <img className="h-16" src="/images/Logo.png" alt="" />
                </div>
                <div>
                    <menu>
                        <nav>
                            <ul className="flex flex-row items-center justify-center gap-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Planos</a></li>
                                <li><a href="#">Para sua empresa</a></li>
                                <li><a href="#">Projetos</a></li>
                                <li><a href="#">Central do assinante</a></li>
                                <li><a href="#">Fale conosco</a></li>
                            </ul>
                        </nav>
                    </menu>
                </div>
                <div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className="bg-primary py-3 px-10 rounded-xl font-bold">ASSINE JÁ</button>
                    </a>
                </div>
            </div>
        </div>
    )
}