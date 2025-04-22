import { Icon } from "@iconify/react";

export default function Forms() {
    return (
        <div className="xl:px-20 px-8 py-20">
            <div className="flex flex-col xl:flex-row items-start justify-between">
                <div className="xl:w-1/2">
                    <p className="text-4xl">Fale com um <b>Atendente</b></p>
                    <div className="bg-gradient-to-r from-primary to-transparent w-60 h-1 mt-4"></div>
                    <div className="mt-6">
                        <div className="flex items-center">
                            <Icon icon="mdi:whatsapp" className="text-3xl mr-2" />
                            <p>(11) 4158-1928</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <Icon icon="mdi:map-marker" className="text-3xl mr-2" />
                            <p>Rua Euclasio, 552/605 - Casablanca - Vargem Grande Paulista / SP</p>
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/2 mt-8 xl:mt-0">
                    <form>
                        <div className="mb-4">
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                className="w-full p-4 rounded-xl bg-white/20"
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="email" 
                                placeholder="E-mail" 
                                className="w-full p-4 rounded-xl bg-white/20"
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="tel" 
                                placeholder="Telefone" 
                                className="w-full p-4 rounded-xl bg-white/20"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea 
                                placeholder="Escreva uma mensagem" 
                                className="w-full p-4 rounded-xl bg-white/20" 
                            />
                        </div>

                        <div className="flex justify-end">
                            <button 
                                type="submit" 
                                className="bg-primary text-white py-2 px-8 rounded-md"
                            >
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div>   
                <iframe className="w-full mt-12 rounded-2xl h-80" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2753697664375!2d-47.030826015060924!3d-23.630307423967455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf09c932d05bbd%3A0x35355c5a12d449d6!2sR.%20Euclasio%2C%20552%20-%20Casa%20Blanca%2C%20Vargem%20Grande%20Paulista%20-%20SP%2C%2006730-000!5e0!3m2!1spt-BR!2sbr!4v1744909513897!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}
