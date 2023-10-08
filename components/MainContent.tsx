import { HeaderMain } from "@/components/HeaderMain";
import { TitleMain } from "@/components/TitleMain";
import { Knowledge } from "@/components/Knowledge";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";


const MainContent = () => {
    return (
        <main className="flex flex-col h-full w-8/12 ml-[26.5%] mr-[9.5%] gap-10">
            <HeaderMain />
            <TitleMain title="Mis conocimientos" subtitle="Áreas de conocimiento" />
            <Knowledge />
            <TitleMain title="Educación" subtitle="Estudios realizados" />
            <Education />
            <TitleMain title="Portafolio" subtitle="Proyectos realizados" />
            <Portfolio />
            <Footer />
        </main>
    );
}

export { MainContent };