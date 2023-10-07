interface PortfolioItemProps {
    title: string;
    description: string;
}

const PortfolioItem = ({ title, description }: PortfolioItemProps) => {
    return (
        <div className="bg-white py-4">
            <div>Imágen</div>
            <h3>{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export { PortfolioItem }