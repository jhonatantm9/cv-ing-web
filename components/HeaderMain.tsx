import Image from "next/image"
import { Button } from "@/components/Button"
import { DialogContact } from "@/components/Dialogs/DialogContact"
import { BiRightArrowAlt } from "react-icons/bi"
import { useState } from "react";

const HeaderMain = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    return (
        <section className="flex bg-white justify-between items-end">
            <div className="flex flex-col w-[70%] gap-3 py-8 pl-8">
                <div>
                    <h1>Soy Jhonatan Tamayo</h1>
                    <h1><span className="text-green-600">Estudiante</span> de Ing. de Sistemas</h1>
                </div>
                <p className="text-gray-600">
                    Soy una persona responsable, amable, respetuosa y solidaria, con gran disposición de aprender.
                    Siempre trato de dar lo mejor de mí a la hora de trabajar y buscar hacerlo de la mejor manera.
                </p>
                <div className="text-lg font-medium">
                    <Button type="big" text="Contáctame" Icon={BiRightArrowAlt} handleClick={handleDialogOpen} />
                </div>
            </div>
            <div className="flex items-end justify-end h-full w-[30%] pt-4">
                <Image src={"/images/foto-cuadrada-jhonatan-no-bg.png"} width={260} height={260}
                    alt="Foto Jhonatan sin fondo" className="aspect-square" />
            </div>
            <DialogContact open={dialogOpen} setOpen={setDialogOpen} />
        </section>
    )
}

export { HeaderMain }