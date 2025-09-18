import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function BannerHome() {
  const banners = [
    "/banners/Banner1.png",
    "/banners/Banner2.png",
    "/banners/Banner3.png",
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
        <div className="swiper-button-prev custom-arrow" />
        <div className="swiper-button-next custom-arrow" />
      </Swiper>
      <style>{`
        .custom-arrow {
          color: white;
          width: 40px;
          height: 40px;
          background: rgba(0,0,0,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          color: white;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
