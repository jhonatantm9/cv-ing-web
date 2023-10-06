import { IconType } from 'react-icons';

interface ListItemProps {
    Icon: IconType;
    text: string;
}

const ListItem = ({ Icon, text }: ListItemProps) => {
    return (
        <div className="flex items-center gap-1 text-sm">
            <span className='text-emerald-600'><Icon /></span>
            <span>{text}</span>
        </div>
    );
}

export { ListItem };