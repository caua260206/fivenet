import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PlanosResidenciais from './PlanosResidenciais'; // Certifique-se de que o caminho está correto

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Planos() {
    const [showImage, setShowImage] = useState<string | null>(null);

    const openImagePopup = (beneficioText: string) => {
        if (beneficioText.includes("HUB")) {
            setShowImage("images/Hub.png");
        } else if (beneficioText.includes("FUN")) {
            setShowImage("images/Fun.png");
        }
    };

    return (
        <div className="py-20 xl:px-20 px-8 max-lg:text-center">
            <p className="text-4xl max-lg:text-center">Planos de <b>Internet</b></p>
            <div className="bg-gradient-to-r max-lg:hidden from-primary to-transparent w-60 h-1 mt-4"></div>

            <div className="mt-8 flex justify-center items-center">
                {/* Removido client:only */}
                <PlanosResidenciais />
            </div>

            <div className="mt-12 space-y-4">
                <p>*Somos parceiros da Watch Brasil®, líder em entretenimento digital. Para desfrutar da Watch TV e aplicações disponibilizadas nos Pacotes como Paramount+ e HBO MAX, certifique-se de que seu dispositivo (TV ou Celular) seja compatível com o aplicativo. Canais locais sugeitos a disponibilidade de cobertura.*</p>
                <p>*Canais locais estão sujeitos à disponibilidade de cobertura. Alguns canais poderão ser substituídos ou suspensos por questões de ordem técnica e/ou comercial junto às programadoras, e os clientes serão previamente informados.*</p>
                <p>*Consulte condições, planos, pacotes e viabilidade técnica.*</p>
            </div>

            {/* Modal com fundo preto e botão branco */}
            {showImage && (
                <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center" onClick={() => setShowImage(null)}>
                    <div className="bg-black p-4 rounded-lg max-w-3xl" onClick={e => e.stopPropagation()}>
                        <button className="text-white float-right text-2xl font-bold" onClick={() => setShowImage(null)}>×</button>
                        <img src={showImage} alt="Imagem Modal" className="w-full h-auto mt-4 rounded" />
                    </div>
                </div>
            )}
        </div>
    );
}