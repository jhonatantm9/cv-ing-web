import { CardPortfolio } from "@/components/CardPortfolio";

const Portfolio = () => {
    return (
        <section className="flex max-w-full gap-9 overflow-x-auto">
            <CardPortfolio
                title="Blackjack"
                description="Juego blackjack o 21 multijugador de hasta cuatro personas."
                imageSource="/images/blackjack-ingame-cut.png"
                alternativeText="Juego de blackjack"
                dialogData={{
                    title: "Blackjack",
                    description: "Un juego de cartas de blackjack o 21 diseñado para permitir hasta 4 personas jugarlo de manera simultánea. Fue diseñado para practicar el uso de sockets en NodeJS",
                    image: "/images/blackjack-ingame-cut.png",
                    link: "https://github.com/jhonatantm9/juego_blackjack"
                }} />
            <CardPortfolio
                title="Predictor de acciones"
                description="Una aplicación de machine learning que predice acciones de empresas estadounidenses."
                imageSource="/images/us-stock-predictor.jpg"
                alternativeText="Predictor de acciones"
                dialogData={{
                    title: "Predictor de acciones",
                    description: "Este proyecto consiste en un modelo de machine learning que predice acciones de empresas estadounidenses y un fornt que consume un API con las predicciones (el link del github sólo es la parte del back).",
                    image: "/images/us-stock-predictor.jpg",
                    link: "https://github.com/jhonatantm9/backend-modelo-predictor"
                }} />
            <CardPortfolio
                title="Buscaminas"
                description="Juego sencillo de buscaminas con tamaños personalizados."
                imageSource="/images/buscaminas-ingame.png"
                alternativeText="Juego de buscaminas"
                dialogData={{
                    title: "Buscaminas",
                    description: "Un juego sencillo de buscaminas desarrollado en el curso \"Lógica III\". Este juego cuenta con 3 tamaños predefinidos y también permite al jugador jugar en un tablero personalizado.",
                    image: "/images/buscaminas-ingame.png",
                    link: "https://github.com/jhonatantm9/Buscaminas-Logica-III"
                }} />
            <CardPortfolio
                title="Dominó"
                description="Juego dominó de cuatro jugadores en modo 'singleplayer'."
                imageSource="/images/domino-game.png"
                alternativeText="Juego de dominó"
                dialogData={{
                    title: "Dominó",
                    description: "El proyecto consiste en un dominó sencillo en el cual el jugador juega contra tres bots. Este proyecto fue desarrollado para Lógica II con el fin de practicar las listas ligadas.",
                    image: "/images/domino-game.png",
                    link: "https://github.com/jhonatantm9/juego-domino"
                }} />
            <CardPortfolio
                title="Página web simple"
                description="Página web básica sobre Antioquia en html y css."
                imageSource="/images/pagina-html.png"
                alternativeText="Juego de dominó"
                dialogData={{
                    title: "Página web simple",
                    description: "Esta página web fue un proyecto del curso \"Técnicas de programación\" en el cual debíamos realizar una página básica (como una especie de maquetado). Se desarrolló a partir de una plantilla de Bootstrap usando HTML, CSS y un poco de Javascript.",
                    image: "/images/pagina-html.png",
                    link: "https://github.com/jhonatantm9/Pagina-html-1"
                }} />
        </section>
    );
}

export { Portfolio }