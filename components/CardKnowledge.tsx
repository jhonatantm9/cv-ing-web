import { IconType } from "react-icons";

interface CardKnowledgeProps {
    Icon: IconType;
    title: string;
    description: string;
}

const CardKnowledge = ({ Icon, title, description }: CardKnowledgeProps) => {
    return (
        <div className="flex flex-col items-center bg-white w-2/6 p-7">
            <div>
                <Icon className="text-6xl text-zinc-900" />
            </div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
}

export { CardKnowledge }