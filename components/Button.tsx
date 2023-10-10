import { IconType } from "react-icons";

interface ButtonProps {
    type: 'big' | 'small' | 'no-bg'
    text: string;
    Icon: IconType;
    handleClick?: () => void;
}

const Button = ({ type, text, Icon, handleClick }: ButtonProps) => {
    return (
        <button
            className={`flex items-center w-fit 
                ${type === "big" ? "bg-green-400 rounded-md p-4 gap-2 text-lg hover:bg-green-500" :
                    type === "small" ? "bg-green-400 rounded-md p-1 hover:bg-green-500" :
                        "text-green-600 text-lg gap-1 hover:underline"}`} onClick={handleClick}>
            <span className="" >{text}</span>
            <Icon className="" />
        </button>
    )
}

export { Button }