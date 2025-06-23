import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerHome() {
    const banners = [
        "/banners/NewBanner1.png",
        "/banners/NewBanner2.png",
        "/banners/NewBanner3.png",
        "/banners/NewBanner4.png",
    ];

    return (
            <div className="w-full max-lg:hidden">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {banners.map((src, index) => {
                        const isBanner4 = index === 3;
                        const href = isBanner4
                            ? "/indique-e-ganhe"
                            : "https://api.whatsapp.com/send?phone=558000800191&text=Link%3Asitesite&source_url=site&icebreaker=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!&app=facebook&entry_point=post_cta&jid=558000800191%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&context=ARC";

                        return (
                            <SwiperSlide key={index}>
                                <a
                                    href={href}
                                    target={isBanner4 ? "_self" : "_blank"}
                                    rel={isBanner4 ? undefined : "noopener noreferrer"}
                                >
                                    <img src={src} alt={`Banner ${index + 1}`} className="w-full h-auto object-cover" />
                                </a>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
        </div>
    );
}
