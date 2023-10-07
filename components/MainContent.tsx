import { HeaderMain } from "@/components/HeaderMain";
import { TitleMain } from "@/components/TitleMain";
import { CardKnowledge } from "@/components/CardKnowledge";
import { CardStudies } from "@/components/CardStudies";
import { LineDivider } from "@/components/LineDivider";
import { Portfolio } from "@/components/Portfolio";
import { SiSpringboot } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { TbDeviceImacCog } from "react-icons/tb";

const MainContent = () => {
    return (
        <main className="flex flex-col h-full w-8/12 ml-[26.5%] mr-[9.5%] gap-10">
            <HeaderMain />
            <TitleMain title="Mis conocimientos" subtitle="Áreas de conocimiento" />
            <section className="flex flex-col items-center gap-3">
                <div className="flex w-full gap-3">
                    <CardKnowledge Icon={SiGithub} title="Git y Github" description="Repositorios" />
                    <CardKnowledge Icon={TbDeviceImacCog} title="Backend" description="Back-end" />
                    <CardKnowledge Icon={SiSpringboot} title="Spring" description="Back-end" />
                </div>
                <div className="flex w-full gap-3">
                    <CardKnowledge Icon={SiScikitlearn} title="Machine learning" description="Back-end" />
                    <CardKnowledge Icon={SiSpringboot} title="Spring" description="Back-end" />
                    <CardKnowledge Icon={SiSpringboot} title="Spring" description="Back-end" />
                </div>
            </section>
            <TitleMain title="Educación" subtitle="Estudios realizados" />
            <section className="flex flex-col items-center bg-white p-8 gap-7">
                <CardStudies institution="Universidad de Antioquia" occupation="Estudiante"
                    date="2019-actualidad" title="Ingeniería de sistemas" description="Lis" />
                <LineDivider />
                <CardStudies institution="Institución educativa María Auxiliadora" occupation="Estudiante"
                    date="2016-2018" title="Bachillerato académico" description="Desc" />
            </section>
            <TitleMain title="Portafolio" subtitle="Proyectos realizados" />
            <section>
                <Portfolio />
            </section>
            <footer className="bg-white">Footer</footer>
        </main>
    );
}

export { MainContent };