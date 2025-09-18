export default function Planos() {
  const handleWhatsAppRedirect = (planoNumber: number) => {
    let whatsappUrl = "";

    switch (planoNumber) {
      case 1:
        whatsappUrl =
          "https://api.whatsapp.com/send?phone=5511984702239&text=Ol%C3%A1,%20FiveNet!%20Estou%20interessado%20em%20assinar%20o%20plano%20Fibra%20Essencial.";
        break;
      case 2:
        whatsappUrl =
          "https://api.whatsapp.com/send?phone=5511984702239&text=Ol%C3%A1,%20FiveNet!%20Estou%20interessado%20em%20assinar%20o%20plano%20Fam%C3%ADlia%20Conectada.";
        break;
      case 3:
        whatsappUrl =
          "https://api.whatsapp.com/send?phone=5511984702239&text=Ol%C3%A1,%20FiveNet!%20Estou%20interessado%20em%20assinar%20o%20plano%20Five%20Premium.";
        break;
    }

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#2b3690] py-20 px-8">
      <div className="max-w-8xl mx-auto bg-white rounded-3xl p-8">
        <h1 className="text-[#004aad] text-5xl max-lg:text-4xl font-bold text-center mb-10 max-lg:mb-5">
          Escolha seu plano
        </h1>

        <div className="flex justify-center items-center gap-16 max-lg:gap-8 flex-wrap">
          <div
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleWhatsAppRedirect(1)}
          >
            <img
              src="/images/Plano1.png"
              alt="Plano 400 mega"
              className="w-80 h-auto rounded-lg"
            />
          </div>

          <div
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleWhatsAppRedirect(2)}
          >
            <img
              src="/images/Plano2.png"
              alt="Plano 600 mega"
              className="w-80 h-auto rounded-lg"
            />
          </div>

          <div
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleWhatsAppRedirect(3)}
          >
            <img
              src="/images/Plano3.png"
              alt="Plano 900 mega"
              className="w-80 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
