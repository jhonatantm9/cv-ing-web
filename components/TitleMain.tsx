interface TitleMainProps {
    title: string;
    subtitle: string;
}

const TitleMain = ({ title, subtitle }: TitleMainProps) => {
    return (
        <div className="flex flex-col gap-3 p-5 pl-8 items-center">
            <h2>{title}</h2>
            <h3 className="font-normal">{subtitle}</h3>
        </div>
    );
}

export { TitleMain };