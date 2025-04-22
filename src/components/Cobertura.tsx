export default function Cobertura() {
    return(
        <div className="flex justify-center xl:px-20 items-center">
            <div className="bg-gradient-to-r w-full from-[#001157] to-[#01259F] py-12 px-6 rounded-2xl">
                <p className="text-white font-bold text-3xl text-center">Consulte área de cobertura</p>
                <form className="mt-8 xl:px-40 flex flex-row items-center gap-8" action="">
                    <input type="text" placeholder="Seu nome:" className="bg-white py-2 px-4 w-96 rounded-md placeholder:text-black" />
                    <input type="text" placeholder="Telefone:" className="bg-white py-2 px-4 w-96 rounded-md placeholder:text-black" />
                    <input type="text" placeholder="Endereço:" className="bg-white py-2 px-4 w-96 rounded-md placeholder:text-black" />
                    <button className="bg-primary font-bold px-12 py-3 rounded-md hover:bg-secondary duration-300">Enviar</button>
                </form>
            </div>
        </div>
    )
}