import { useState } from 'react';

export default function FormularioAssinatura() {
    const [formData, setFormData] = useState({
        nome: '',
        documento: '',
        rg: '',
        endereco: '',
        cep: '',
        telefone: '',
        email: '',
        dataVencimento: '',
        plano: '',
        dataInstalacao: '',
        periodoInstalacao: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('/api/assine.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ type: 'success', text: 'Obrigado pelo interesse! Em breve entraremos em contato para confirmar sua assinatura.' });
                setFormData({
                    nome: '',
                    documento: '',
                    rg: '',
                    endereco: '',
                    cep: '',
                    telefone: '',
                    email: '',
                    dataVencimento: '',
                    plano: '',
                    dataInstalacao: '',
                    periodoInstalacao: ''
                });
            } else {
                throw new Error(data.message || 'Erro ao enviar formulário');
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Desculpe, não foi possível processar sua solicitação. Por favor, tente novamente.' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="py-20 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-7xl bg-secondary rounded-2xl p-10 flex flex-col items-center">
                <h2 className="text-3xl text-white font-bold mb-8 text-center">Formulário de Assinatura Empresarial</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <input type="text" name="nome" placeholder="Razão Social" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.nome} onChange={handleChange} required />
                    <input type="text" name="documento" placeholder="CNPJ" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.documento} onChange={handleChange} required />
                    <input type="text" name="rg" placeholder="Inscrição Estadual" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.rg} onChange={handleChange} required />

                    <input type="text" name="endereco" placeholder="Endereço" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.endereco} onChange={handleChange} required />
                    <input type="text" name="cep" placeholder="CEP" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.cep} onChange={handleChange} required />
                    <input type="tel" name="telefone" placeholder="Telefone Comercial" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.telefone} onChange={handleChange} required />

                    <input type="email" name="email" placeholder="E-mail Corporativo" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="dataVencimento" placeholder="Data de Vencimento" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.dataVencimento} onChange={handleChange} required />
                    
                    <select name="plano" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.plano} onChange={handleChange} required>
                        <option value="">Selecione o plano de seu interesse</option>
                        <option value="Só Internet">Só Internet</option>
                        <option value="Internet + Combo com TV">Internet + Combo com TV</option>
                        <option value="Internet + Combo com TV e Streaming">Internet + Combo com TV e Streaming</option>
                        <option value="Solução de Cobertura WI-FI com Extensores Mesh">Solução de Cobertura WI-FI com Extensores Mesh</option>
                        <option value="Quero uma solução que atenda as minhas necessidades">Quero uma solução que atenda as minhas necessidades</option>
                    </select>

                    <input type="text" name="dataInstalacao" placeholder="Data para instalação" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.dataInstalacao} onChange={handleChange} required />
                    <select name="periodoInstalacao" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" value={formData.periodoInstalacao} onChange={handleChange} required>
                        <option value="">Selecione o período para a instalação</option>
                        <option value="Manhã">Manhã</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noite">Noite</option>
                    </select>
                </div>

                {message.text && (
                    <div className={`mt-4 p-4 rounded-lg text-white text-center ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
                        {message.text}
                    </div>
                )}

                <button 
                    type="submit" 
                    className="mt-10 bg-primary text-white font-bold py-3 px-10 rounded-md w-full max-w-md disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
}
