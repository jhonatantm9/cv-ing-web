import { PortfolioItem } from "@/components/PortfolioItem";

const Portfolio = () => {
    return (
        <div className="flex max-w-full gap-4">
            <PortfolioItem title="Blackjack" description="Juego" />
            <PortfolioItem title="Buscaminas" description="Juego" />
        </div>
    );
}

export { Portfolio }