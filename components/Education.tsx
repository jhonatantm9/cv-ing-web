import { CardStudies } from "@/components/CardStudies";
import { LineDivider } from "@/components/LineDivider";

const Education = () => {
    return (
        <section className="flex flex-col items-center bg-white p-8 gap-7">
            <CardStudies institution="Universidad de Antioquia" occupation="Estudiante"
                date="2019-actualidad" title="Ingeniería de sistemas" description="Lis" />
            <LineDivider />
            <CardStudies institution="Institución educativa María Auxiliadora" occupation="Estudiante"
                date="2016-2018" title="Bachillerato académico" description="Desc" />
        </section>
    )
}

export { Education };