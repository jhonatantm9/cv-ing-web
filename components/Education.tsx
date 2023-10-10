import { CardStudies } from "@/components/CardStudies";
import { LineDivider } from "@/components/LineDivider";

const Education = () => {
    return (
        <section className="flex flex-col items-center bg-white p-8 gap-7">
            <CardStudies
                institution="Universidad de Antioquia"
                occupation="Estudiante"
                date="2019-actualidad"
                title="Ingeniero de sistemas"
                description="Actualmente me encuentro estudiando ingeniería de sistemas en la UdeA y
                tengo un total de 7 semestres cursados." />
            <LineDivider />
            <CardStudies
                institution="I.E. María Auxiliadora"
                occupation="Estudiante"
                date="2016-2018"
                title="Bachiller académico"
                description="Completé mi educación media en la I.E. María Auxiliadora, donde 
                recibí el título de bachiller académico." />
        </section>
    )
}

export { Education };