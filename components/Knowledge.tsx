import { CardKnowledge } from "@/components/CardKnowledge";
import { SiSpringboot } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { TbDeviceImacCog } from "react-icons/tb";

const Knowledge = () => {
    return (
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
    )
}

export { Knowledge };