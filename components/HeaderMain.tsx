import Image from "next/image"

const HeaderMain = () => {
    return (
        <section className="flex bg-white justify-between items-center">
            <div className="flex flex-col w-9/12 gap-3 py-8 pl-8">
                <div>
                    <h1>Soy Jhonatan Tamayo</h1>
                    <h1><span className="text-green-600">Estudiante</span> Ing. de Sistemas</h1>
                </div>
                <div>
                    <p className="text-gray-600">
                        Soy una persona responsable, amable, respetuosa y solidaria, con gran disposición de aprender.
                        Siempre trato de dar lo mejor de mí a la hora de trabajar y buscar hacerlo de la mejor manera.</p>
                    <button className="bg-green-400 p-5">Boton</button>
                </div>
            </div>
            <div className="flex items-end justify-end h-full w-4/12 pt-4">
                {/* <img src="/images/foto-cuadrada-jhonatan-no-bg.png" alt="Foto Jhonatan sin fondo"
                    className="w-auto aspect-square object-cover bg-center " /> */}
                <Image src={"/images/foto-cuadrada-jhonatan-no-bg.png"} width={260} height={260}
                    alt="Foto Jhonatan sin fondo" className="aspect-square" />
            </div>
        </section>
    )
}

export { HeaderMain }