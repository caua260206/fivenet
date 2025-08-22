import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Cobertura() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cep: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/cobertura.json", {
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
          text: "Obrigado pela consulta! Em breve entraremos em contato para informar sobre a disponibilidade em sua região.",
        });
        setFormData({
          nome: "",
          telefone: "",
          cep: "",
        });
      } else {
        throw new Error(data.message || "Erro ao enviar solicitação");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Desculpe, não foi possível verificar a cobertura no momento. Por favor, tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-secondary pt-10 pb-16 max-lg:px-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Verifique a cobertura em sua região
        </h2>
        <p className="mt-4">
          Preencha os campos abaixo e descubra se a Netcintra está disponível em
          sua região.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 xl:px-40 flex flex-row max-lg:flex-col max-lg:justify-center items-center gap-8"
      >
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full w-full"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full w-full"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          className="text-black bg-white placeholder:text-black px-5 py-3 rounded-full w-full"
          value={formData.cep}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 px-10 rounded-md w-full max-w-xs disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Verificar"}
        </button>
      </form>

      {message.text && (
        <div
          className={`mt-4 max-w-2xl mx-auto p-4 rounded-lg text-white text-center ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
