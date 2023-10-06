import { IconType } from 'react-icons';

interface CircularIconProps {
    Icon: IconType;
    refLink: string;
}

const CircularIcon = ({ Icon, refLink }: CircularIconProps) => {
    return (
        <a href={refLink} target='_blank' className='flex flex-col items-center bg-green-500 p-3 rounded-full w-3/5 aspect-square'>
            <Icon className='w-5/6 h-5/6 text-gray-800 m-0.5' />
        </a>
    );
}

export { CircularIcon };