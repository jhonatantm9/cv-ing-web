import { HeaderMain } from "@/components/HeaderMain";
import { TitleMain } from "@/components/TitleMain";
import { CardKnowledge } from "@/components/CardKnowledge";
import { SiSpringboot } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { TbDeviceImacCog } from "react-icons/tb";

const MainContent = () => {
    return (
        <main className="flex flex-col h-full w-8/12 ml-[26.5%] mr-[9.5%] gap-10">
            <HeaderMain />
            <TitleMain title="Mis conocimientos" subtitle="Áreas de conocimiento" />
            <div className="flex flex-col items-center gap-3">
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
            </div>
            <TitleMain title="Educación" subtitle="Estudios realizados" />
            <div className="bg-white debug">

            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, tempora dignissimos molestiae ad numquam quia velit perspiciatis,
                dolores architecto aperiam, at esse explicabo aliquam sed voluptatibus suscipit.
                Optio, laboriosam eum?
            </p>
        </main>
    );
}

export { MainContent };