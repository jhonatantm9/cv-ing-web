import Image from "next/image"
import { LineDivider } from '@/components/LineDivider'
import { PercentageBar } from '@/components/PercentageBar'
import { TextSpaced } from '@/components/TextSpaced'
import { ListItem } from '@/components/ListItem'
import { AiOutlineBlock } from "react-icons/ai";

const AsideLeft = () => {
    return (
        <aside className="h-screen fixed top-0 left-0 bg-white w-3/12 flex flex-col items-center px-8 py-6 max-h-screen">
            {/* <section className="flex flex-col w-4/5 items-center shrink">
                <div className="flex flex-col relative">
                    <Image src="/images/foto-cuadrada-jhonatan.jpg" width={150} height={150} alt="Foto Jhonatan" className="rounded-full" />
                    <span className="bg-lime-500 h-[16px] w-[16px] rounded-full absolute right-3 bottom-4" />
                </div>
                <div className="flex flex-col w-full items-center">
                    <span className="text-center">Jhonatan Tamayo</span>
                    <span className="text-center">Estudiante Ing. Sistemas</span>
                </div>
            </section> */}
            <section className="flex flex-col items-center gap-1">
                <div className="flex flex-col aspect-square relative items-center"> {/*w-3/6 para img*/}
                    {/* <img src="/images/foto-cuadrada-jhonatan.jpg" alt="Foto Jhonatan" className="w-full aspect-square rounded-full" /> */}
                    <Image src="/images/foto-cuadrada-jhonatan.jpg" width={140} height={140} alt="Foto Jhonatan" className="rounded-full" />
                    <span className="bg-lime-500 w-[11.5%] aspect-square rounded-full absolute right-3 bottom-3" />
                </div>
                <div className="flex flex-col w-full items-center">
                    <h3 className="text-center">Jhonatan Tamayo</h3>
                    <h3 className="text-center text-gray-600 font-light">Estudiante Ing. Sistemas</h3>
                </div>
            </section>
            <LineDivider />
            <section className="flex flex-col w-full shrink">
                <TextSpaced label="Edad:" value="22" />
                <TextSpaced label="Teléfono:" value="3023321493" />
                <TextSpaced label="Correo:" value="jhonatantmora@gmail.com" />
                <TextSpaced label="Ciudad:" value="Caldas" />
            </section>
            <LineDivider />
            <section className="flex flex-col w-full shrink">
                <h3>Idiomas</h3>
                <PercentageBar label="Español" percentage={100}></PercentageBar>
                <PercentageBar label="Inglés" percentage={70}></PercentageBar>
            </section>
            <LineDivider />
            <section className="flex flex-col w-full shrink">
                <h3>Lenguajes de programación</h3>
                <PercentageBar label="Java" percentage={70}></PercentageBar>
                <PercentageBar label="Python" percentage={45}></PercentageBar>
            </section>
            <LineDivider />
            <section className="flex flex-col w-full shrink">
                <h3>Habilidades personales</h3>
                <ListItem Icon={AiOutlineBlock} text="Trabajo en equipo" />
                <ListItem Icon={AiOutlineBlock} text="Comunicación asertiva" />
            </section>
            <LineDivider />
        </aside>
    );
}

export { AsideLeft }