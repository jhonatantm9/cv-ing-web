import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Button } from "@/components/Button";
import { BiX } from "react-icons/bi"
import { Dispatch, SetStateAction } from "react";

interface DialogContactProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogContact = ({ open, setOpen }: DialogContactProps) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}>
            <DialogTitle className="text-center">Gracias por querer contactarme</DialogTitle>
            <DialogContent className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-justify">
                        Si deseas enviarme un mensaje o escribirme tienes las opciones de contacto en la
                        parte izquierda de la pantalla, mientras tanto, aquí tienes un pajarito de papel.
                    </p>
                    <img src="/images/grulla-origami.gif" alt="Grulla de papel" className="w-4/6 rounded-sm" />
                </div>
                <div className="flex justify-end">
                    <Button type="small" text="Cerrar" Icon={BiX} handleClick={() => setOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export { DialogContact }