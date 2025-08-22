import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Forms() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contato.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Obrigado por entrar em contato! Em breve nossa equipe retornará sua mensagem.",
        });
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          cep: "",
          mensagem: "",
        });
      } else {
        throw new Error(data.message || "Erro ao enviar mensagem");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Desculpe, não foi possível enviar sua mensagem. Por favor, tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="xl:px-20 px-8 py-20 max-lg:py-10">
      <div className="flex flex-col xl:flex-row items-start max-lg:items-center max-lg:justify-center max-lg:text-center justify-between">
        <div className="xl:w-1/2">
          <p className="text-4xl">
            Fale com um <b>Atendente</b>
          </p>
          <div className="bg-gradient-to-r max-lg:hidden from-primary to-transparent w-60 h-1 mt-4"></div>
          <div className="mt-6 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
            <div className="flex items-center">
              <Icon icon="mdi:whatsapp" className="text-3xl mr-2" />
              <a
                href="https://api.whatsapp.com/send?phone=551141581928"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                (11) 4158-1928
              </a>
            </div>
            <div className="flex items-center mt-4">
              <Icon icon="mdi:map-marker" className="text-3xl mr-2" />
              <a
                href="https://www.google.com/maps/place/R.+Euclasio,+552+-+Casa+Blanca,+Vargem+Grande+Paulista+-+SP,+06730-000,+Brasil/@-23.630307,-47.025955,760m/data=!3m1!1e3!4m6!3m5!1s0x94cf09c932d05bbd:0x35355c5a12d449d6!8m2!3d-23.6303075!4d-47.0259551!16s%2Fg%2F11vzr_1gpt?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Rua Euclasio, 552/605 - Casablanca - Vargem Grande Paulista / SP
              </a>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 w-full mt-8 xl:mt-0">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-7xl bg-secondary rounded-2xl p-10 flex flex-col items-center"
          >
            <h2 className="text-3xl text-white font-bold mb-8 text-center">
              Entre em contato conosco!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full"
                value={formData.cep}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="mensagem"
              placeholder="Mensagem"
              className="w-full text-black bg-white placeholder:text-black px-5 py-3 rounded-2xl mt-6 resize-none h-32"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />

            {message.text && (
              <div
                className={`mt-4 p-4 rounded-lg text-white text-center ${
                  message.type === "success" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              className="mt-10 bg-primary text-white font-bold py-3 px-10 rounded-md w-full max-w-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>

      <div>
        <iframe
          className="w-full mt-12 rounded-2xl h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2753697664375!2d-47.030826015060924!3d-23.630307423967455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf09c932d05bbd%3A0x35355c5a12d449d6!2sR.%20Euclasio%2C%20552%20-%20Casa%20Blanca%2C%20Vargem%20Grande%20Paulista%20-%20SP%2C%2006730-000!5e0!3m2!1spt-BR!2sbr!4v1744909513897!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
