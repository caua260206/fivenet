export default function FormularioAssinatura() {
    return (
        <div className="py-20 flex justify-center items-center">
            <form className="w-full max-w-7xl bg-secondary rounded-2xl p-10 flex flex-col items-center">
                <h2 className="text-3xl text-white font-bold mb-8 text-center">Preencha o formulário abaixo e assine agora!</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {/* Linha 1 */}
                    <input type="text" placeholder="Nome/Razão" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="Data de Nascimento" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="CPF/CNPJ" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />

                    {/* Linha 2 */}
                    <input type="text" placeholder="RG/IE" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="Endereço" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="CEP" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />

                    {/* Linha 3 */}
                    <input type="text" placeholder="Condomínio" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="Complemento" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="Telefone" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />

                    {/* Linha 4 */}
                    <input type="email" placeholder="E-mail" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <input type="text" placeholder="Data de Vencimento" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <select className="input-form text-black bg-white text-black placeholder:text-black px-5 py-3 rounded-full">
                        <option className="text-black">Selecione o plano de seu interesse</option>
                        <option>300Mb</option>
                        <option>500Mb</option>
                        <option>600Mb</option>
                        <option>800Mb</option>
                        <option>1000Mb</option>
                    </select>

                    {/* Linha 5 */}
                    <input type="text" placeholder="Data para instalação" className="input-form text-black bg-white placeholder:text-black px-5 py-3 rounded-full" />
                    <select className="input-form text-black bg-white placeholder:text-black text-black px-5 py-3 rounded-full">
                        <option className="text-black placeholder:text-black">Selecione o período para a instalação</option>
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                    </select>
                </div>

                {/* Botão Enviar */}
                <button type="submit" className="mt-10 bg-primary text-white font-bold py-3 px-10 rounded-md w-full max-w-md">
                    Enviar
                </button>
            </form>
        </div>
    )
}
