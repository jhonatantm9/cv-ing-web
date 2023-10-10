import { IconType } from "react-icons";

interface CardKnowledgeProps {
    Icon: IconType;
    title: string;
    description: string;
}

const CardKnowledge = ({ Icon, title, description }: CardKnowledgeProps) => {
    return (
        <div className="flex flex-col items-center bg-white w-2/6 p-7 gap-3 hover:scale-105">
            <div>
                <Icon className="text-6xl text-zinc-900" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <h3>{title}</h3>
                <span className="text-center">{description}</span>
            </div>
        </div>
    );
}

export { CardKnowledge }