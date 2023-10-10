import { CardKnowledge } from "@/components/CardKnowledge";
import { SiSpringboot } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { TbDeviceImacCog } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { FaChalkboardTeacher } from "react-icons/fa";

const Knowledge = () => {
    return (
        <section className="flex flex-col items-center gap-3">
            <div className="flex w-full gap-3">
                <CardKnowledge
                    Icon={SiGithub}
                    title="Git y Github"
                    description="Control de versiones y repositorios" />
                <CardKnowledge
                    Icon={TbDeviceImacCog}
                    title="Back-end"
                    description="Conocimientos en desarrollo back-end de aplicaciones" />
                <CardKnowledge
                    Icon={SiSpringboot}
                    title="Springboot"
                    description="Framework de desarrollo para aplicaciones con Java" />
            </div>
            <div className="flex w-full gap-3">
                <CardKnowledge
                    Icon={SiScikitlearn}
                    title="Machine learning"
                    description="Desarrollo de modelos de aprendizaje automático" />
                <CardKnowledge
                    Icon={DiScrum}
                    title="Metodologías ágiles"
                    description="Conocimiento en metodologías como scrum" />
                <CardKnowledge
                    Icon={FaChalkboardTeacher}
                    title="Tutorías"
                    description="Tutorías académicas en matemáticas y lógica" />
            </div>
        </section>
    )
}

export { Knowledge };