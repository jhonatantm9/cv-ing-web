import Image from 'next/image';
import { Button } from '@/components/Button';
import { DialogPortfolio } from '@/components/Dialogs/DialogPortfolio';
import { BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';

interface CardPortfolioProps {
    title: string;
    description: string;
    imageSource: string;
    alternativeText: string;
    dialogData?: {
        title: string;
        description: string;
        image: string;
        link: string;
    };
}

const CardPortfolio = ({ title, description, imageSource, alternativeText, dialogData }: CardPortfolioProps) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    return (
        <div className="flex flex-col items-center bg-white py-4 pt-6 gap-4 min-w-[35%]">
            <div className='flex items-center'>
                <Image src={imageSource} alt={alternativeText} width={320} height={320}
                    className='object-contain aspect-video' />
            </div>
            <div className="flex flex-col px-4 gap-2">
                <h3>{title}</h3>
                <p className="text-gray-600">{description}</p>
                {/* <ButtonBgNone text="Saber más" Icon={BiChevronRight} handleClick={handleDialogOpen} /> */}
                <Button type='no-bg' text="Saber más" Icon={BiChevronRight} handleClick={handleDialogOpen} />
            </div>
            <DialogPortfolio
                open={dialogOpen}
                setOpen={setDialogOpen}
                data={dialogData ? dialogData : { title: "Dialogo", description: "Desc", image: "img", link: "link" }} />
        </div>
    );
}

export { CardPortfolio }