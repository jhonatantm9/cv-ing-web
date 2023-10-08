import Image from 'next/image';

interface CardPortfolioProps {
    title: string;
    description: string;
    imageSource: string;
    alternativeText: string;
}

const CardPortfolio = ({ title, description, imageSource, alternativeText }: CardPortfolioProps) => {
    return (
        <div className="flex flex-col items-center bg-white py-4 pt-6 gap-3 min-w-[35%]">
            <div className='flex items-center'>
                <Image src={imageSource} alt={alternativeText} width={320} height={320}
                    className='object-contain aspect-video' />
            </div>
            <div className="flex flex-col items-center px-4">
                <h3>{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export { CardPortfolio }