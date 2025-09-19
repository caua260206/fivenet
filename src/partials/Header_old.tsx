export default function Header() {
  return (
    <a
      href="https://wa.me/5515996054869?text=Ol%C3%A1!%20Vim%20do%20site.%20"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-[9999] animate-bounce"
    >
      <img
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        className="w-10 h-10 invert"
      />
    </a>
  );
}
              <b className="text-xs md:text-sm">0800 282 2444</b>
            </li>
          </ul>
          <ul className="flex flex-row items-center gap-6">
            <li
              className="flex items-center gap-2 text-white group hover:text-primary duration-300 cursor-pointer"
              onClick={handlePopupToggle}
            >
              <Icon
                fontSize={16}
                icon="mdi:map-marker"
                className="text-white group-hover:text-primary duration-300"
              />
              <span className="text-xs md:text-sm font-bold">
                {selectedCity}
              </span>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tvactelecom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  fontSize={24}
                  className="text-primary"
                  icon="mdi:instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tvactelecom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  fontSize={24}
                  className="text-primary"
                  icon="mdi:facebook"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Popup Cidades */}
        {popupOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-60">
            <div className="bg-[#071b27] p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-lg font-bold mb-4 text-white">
                Selecione sua cidade:
              </h2>
              <select
                className="w-full p-2 border border-gray-300 bg-white rounded-md"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Escolha sua cidade</option>
                <option value="Tietê">Tietê</option>
                <option value="Cerquilho">Cerquilho</option>
              </select>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-gray-300 px-4 py-2 rounded-md text-black hover:bg-gray-400"
                  onClick={handlePopupToggle}
                >
                  Fechar
                </button>
                <button
                  className="bg-primary px-4 py-2 rounded-md text-[#071B27] hover:bg-primary-dark"
                  onClick={handleCitySelect}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navbar Principal */}
        <div className="bg-white/5 px-6 md:px-12 py-4 md:py-6 backdrop-blur-sm z-10 border border-white/30 max-lg:rounded-xl rounded-full">
          <div className="flex items-center justify-between w-full h-7">
            <a href="/">
              <img
                src="/images/Logo.svg"
                alt="Logo"
                className="w-32 md:w-40 hover:-translate-y-1 duration-300"
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex flex-row items-center gap-12">
                <li>
                  <a
                    className="text-white hover:text-primary duration-300"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-primary duration-300"
                    href="/sobre-nos"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-primary duration-300"
                    href="/planos-de-internet"
                  >
                    Planos
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-primary duration-300"
                    href="/contato"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            {/* Botão desktop */}
            <div className="hidden md:block">
              <a
                href="https://tvac.sgp.tsmx.com.br/central"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary px-5 py-2 rounded-full text-secondary text-sm font-bold hover:-translate-y-1 duration-300">
                  Central do assinante
                </button>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} fontSize={28} />
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-6 md:hidden space-y-4 flex flex-col items-center text-center">
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <button
                    onClick={handlePopupToggle}
                    className="text-white hover:text-primary flex items-center gap-2 justify-center"
                  >
                    <Icon icon="mdi:map-marker" fontSize={18} />
                    Escolha sua cidade
                  </button>
                </li>
                <li>
                  <a className="hover:text-primary" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="/sobre-nos">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="/planos-de-internet">
                    Planos
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="/contato">
                    Contato
                  </a>
                </li>
              </ul>
              <a
                href="https://tvac.sgp.tsmx.com.br/central"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary px-8 py-3 rounded-full text-secondary font-bold hover:-translate-y-1 duration-300">
                  Central do assinante
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
