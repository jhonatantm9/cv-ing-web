import { CircularIcon } from "@/components/CircularIcon";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const AsideRight = () => {
    return (
        <aside className="h-full fixed top-0 right-0 bg-white w-1/12 flex flex-col items-center p-1 py-10 gap-4">
            <h3>Enlaces</h3>
            <CircularIcon Icon={FaLinkedinIn} refLink="https://www.linkedin.com/in/jhonatan-tamayo-morales-8866b028b/" />
            <CircularIcon Icon={FaGithub} refLink="https://github.com/jhonatantm9" />
            <CircularIcon Icon={FaInstagram} refLink="https://www.instagram.com/jhonatantmorales/" />
        </aside>
    );
}

export { AsideRight };