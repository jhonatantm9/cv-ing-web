interface TextSpacedProps {
    label: string;
    value: string;
}

const TextSpaced = ({ label, value }: TextSpacedProps) => {
    return (
        <div className="row-space-between text-sm">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}

export { TextSpaced };