import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Button } from "@/components/Button";
import { BiX } from "react-icons/bi"
import { Dispatch, SetStateAction } from "react";

interface DialogPortfolioProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    data: {
        title: string;
        description: string;
        image: string;
        link: string;
    }
}

const DialogPortfolio = ({ open, setOpen, data }: DialogPortfolioProps) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}>
            <DialogTitle className="text-center font-bold">{data.title}</DialogTitle>
            <DialogContent className="flex flex-col gap-2">
                <div className="flex flex-col items-center gap-4">
                    <img src={data.image} alt={data.title} className="w-auto rounded-sm" />
                    <p className="text-justify">{data.description}</p>
                    <a href={data.link} target="_blank" className="text-emerald-500">Ver github</a>
                </div>
                <div className="flex justify-end">
                    <Button type="small" text="Cerrar" Icon={BiX} handleClick={() => setOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export { DialogPortfolio }