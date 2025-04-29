import { useState } from 'react';

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        area: '',
        arquivo: null as File | null
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('/api/data.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: "Formulário de Trabalhe Conosco | Site",
                    text: `
                        Nome: ${formData.nome}
                        Email: ${formData.email}
                        Telefone: ${formData.telefone}
                        Endereço: ${formData.endereco}
                        Área de Interesse: ${formData.area}
                    `
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar formulário');
            }

            setMessage({ type: 'success', text: 'Formulário enviado com sucesso!' });
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                endereco: '',
                area: '',
                arquivo: null
            });
        } catch (error) {
            setMessage({ type: 'error', text: 'Erro ao enviar formulário. Tente novamente.' });
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, arquivo: e.target.files[0] });
        }
    };

    return (
        <div className="max-w-6xl xl:px-52 bg-secondary p-10 rounded-2xl mx-auto px-8">
            <h1 className="text-4xl font-bold text-center text-white mb-10">
                Junte-se ao nosso time e faça a diferença!
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                    <input
                        type="tel"
                        placeholder="Telefone"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Endereço"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                        value={formData.endereco}
                        onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                        required
                    />
                </div>
                <textarea
                    placeholder="Qual área você deseja trabalhar?"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none resize-none"
                    rows={4}
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    required
                />
                <div className="flex items-center gap-3">
                    <label className="bg-white text-gray-800 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        Escolher arquivo
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                    <span className="text-gray-300 text-sm">
                        {formData.arquivo ? formData.arquivo.name : 'Nenhum arquivo escolhido'}
                    </span>
                </div>
                {message.text && (
                    <div className={`text-center p-3 rounded-lg ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                        {message.text}
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full bg-[#F47B20] text-white py-3 rounded-lg hover:bg-[#E06910] transition-colors font-medium text-lg disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
} 