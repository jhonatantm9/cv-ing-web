import { CardPortfolio } from "@/components/CardPortfolio";

const Portfolio = () => {
    return (
        <section className="flex max-w-full gap-9 overflow-x-auto">
            <CardPortfolio title="Blackjack" description="Juego blackjack o 21 multijugador de hasta cuatro personas."
                imageSource="/images/blackjack-ingame-cut.png" alternativeText="Juego de blackjack" />
            <CardPortfolio title="Predictor de acciones" description="Una aplicación de machine learning que predice
            acciones de empresas estadounidenses." imageSource="/images/us-stock-predictor.jpg"
                alternativeText="Predictor de acciones" />
            <CardPortfolio title="Buscaminas" description="Juego sencillo de buscaminas con tamaños personalizados."
                imageSource="/images/buscaminas-ingame.png" alternativeText="Juego de buscaminas" />
            <CardPortfolio title="Dominó" description="Juego dominó de cuatro jugadores en modo 'singleplayer'."
                imageSource="/images/domino-game.png" alternativeText="Juego de buscaminas" />

        </section>
    );
}

export { Portfolio }