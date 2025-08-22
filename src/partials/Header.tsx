import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top bar */}
      <div className="flex flex-col max-lg:hidden md:flex-row items-center justify-between bg-gradient-to-r from-[#001158] to-[#00259D] xl:px-20 px-8 py-3 gap-2 text-center md:text-left">
        <div>
          <a
            className="flex flex-row items-center gap-2 justify-center md:justify-start"
            href="https://api.whatsapp.com/send?phone=5511975358300&text=Ol%C3%A1!%20Vim%20do%20site"
          >
            <Icon icon="mdi:phone-check" fontSize={20} className="text-white" />
            <span className="text-white">(11) 4158-1928</span>
          </a>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <li>
              <a
                className="flex flex-row items-center gap-2"
                href="https://www.google.com/maps/place/R.+Euclasio,+552+-+Casa+Blanca,+Vargem+Grande+Paulista+-+SP,+06730-000,+Brasil/@-23.630307,-47.025955,760m/data=!3m1!1e3!4m6!3m5!1s0x94cf09c932d05bbd:0x35355c5a12d449d6!8m2!3d-23.6303075!4d-47.0259551!16s%2Fg%2F11vzr_1gpt?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <Icon
                  icon="mdi:map-marker-right"
                  fontSize={20}
                  className="text-white"
                />
                <span className="text-white">
                  Rua Euclasio, 552/605 - Casablanca - Vargem Grande Paulista /
                  SP
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex flex-row items-center gap-2"
                href="https://sistema.netcintra.com.br/radiusnet/cda/login.php"
              >
                <Icon
                  icon="mdi:user-arrow-right"
                  fontSize={20}
                  className="text-white"
                />
                <span className="text-white">Área do cliente</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main header */}
      <div className="flex flex-row items-center justify-between xl:px-20 px-8 py-7 relative">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              className="h-16 hover:-translate-y-1 duration-300"
              src="/images/Logo.png"
              alt="Logo"
            />
          </a>
        </div>

        {/* Botão menu no mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} fontSize={30} />
        </button>

        {/* Menu (mobile + desktop) */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex absolute md:static top-[100%] left-0 w-full md:w-auto bg-secondary animate-in duration-300 fade-in-50 md:bg-transparent flex-col md:flex-row items-center md:gap-10 gap-6 py-6 md:py-0 z-10`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-10 max-lg:gap-4">
            <li>
              <a className="hover:text-primary duration-300" href="/">
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary duration-300"
                href="/planos-de-internet"
              >
                Planos
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary duration-300"
                href="/para-sua-empresa"
              >
                Para sua empresa
              </a>
            </li>
            <li>
              <a className="hover:text-primary duration-300" href="/sobre-nos">
                Sobre Nós
              </a>
            </li>
            <li>
              <a className="hover:text-primary duration-300" href="/projetos">
                Projetos
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary duration-300"
                href="https://sistema.netcintra.com.br/radiusnet/cda/login.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Central do assinante
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary duration-300"
                href="/fale-conosco"
              >
                Fale conosco
              </a>
            </li>
          </ul>

          {/* Botão "ASSINE JÁ" dentro do menu */}
          <a
            href="https://api.whatsapp.com/send?phone=5511975358300&text=Ol%C3%A1!%20Vim%20do%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-4"
          >
            <button className="bg-primary hover:-translate-y-1 duration-300 hover:bg-secondary text-white py-3 px-10 rounded-xl font-bold">
              ASSINE JÁ
            </button>
          </a>
        </nav>

        {/* Botão "ASSINE JÁ" desktop (fora do menu) */}
        <div className="hidden md:block">
          <a
            href="https://api.whatsapp.com/send?phone=5511975358300&text=Ol%C3%A1!%20Vim%20do%20site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary hover:-translate-y-1 duration-300 text-white py-3 px-12 rounded-xl font-bold">
              ASSINE JÁ
            </button>
          </a>
        </div>
      </div>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=5511975358300&text=Ol%C3%A1!%20Vim%20do%20site"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-[9999] animate-bounce flex justify-center items-center"
      >
        <img
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          className="w-11 h-10 object-contain -mr-0.5"
        />
      </a>
    </div>
  );
}
