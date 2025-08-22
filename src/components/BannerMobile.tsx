import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerHome() {
  const banners = [
    "/banners/NewBannerMobile1.png",
    "/banners/NewBannerMobile2.png",
    "/banners/NewBannerMobile3.png",
    "/banners/NewBannerMobile4.png",
    "/banners/NewBannerMobile5.png",
  ];

  return (
    <div className="w-full md:hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
