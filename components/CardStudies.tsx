interface CardStudiesProps {
    institution: string;
    occupation: string;
    date: string;
    title: string;
    description: string;
}

const CardStudies = ({ institution, occupation, date, title, description }: CardStudiesProps) => {
    return (
        <div className="flex w-full p-4 gap-4">
            <div className="flex flex-col w-2/5 gap-4">
                <h3>{institution}</h3>
                <div className="flex gap-5 items-center">
                    <span>{occupation}</span>
                    <span className="bg-green-400 px-3 py-0.5 rounded-sm">{date}</span>
                </div>
            </div>
            <div className="flex flex-col w-3/5 gap-4">
                <h3>{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export { CardStudies }