import { Hiker } from "../../images/Icons"
import styles from "./mountain.module.css";

export const Stairs = ({setStateMountain}) => {
    enum StateMountain {
        None = 'None',
        Experience = 'Experience',
        Skills = 'Skills',
        Projects = 'Projects'
    };
    return (
        <div class="flex h-full">
            <ul class="flex  flex-col h-full w-full items-center">
                <li class="border-5 border-dashed flex h-66 w-full">
                    <button class="w-full h-full" 
                    onClick={(e) => {
                        e.preventDefault();
                        setStateMountain(StateMountain.Experience);
                    }}
                    >Experiencia</button>
                </li>
                <li class="border-5 border-dashed flex h-66  w-full">
                    <button class="w-full h-full" 
                        onClick={(e) => {
                            e.preventDefault();
                            setStateMountain(StateMountain.Skills);
                        }}>Habilidades</button>
                </li>
                <li class="border-5 border-dashed flex h-73  w-full">
                    <button class="w-full h-full" onClick={(e) => {
                        e.preventDefault();
                        setStateMountain(StateMountain.Projects);
                    }}>Proyectos</button>
                </li>
            </ul>
        </div>

    )
}