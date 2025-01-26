import { createSignal } from 'solid-js';
import { Mountain } from '../Mountain/Mountain';
import { Experience } from '../Experience';
import { Projects } from '../Projects';
import { Skills } from '../Skills';

export const Hero = () => { 
    enum StateMountain {
        None = 'None',
        Experience = 'Experience',
        Skills = 'Skills',
        Projects = 'Projects'
    };
    const [stateMountain, setStateMountain] = createSignal<StateMountain>(StateMountain.None)

    return (
        <>
            <section class="grid lg:grid-cols-2 h-9/10 text-white">
                 <div class="grid">
                    <Mountain setStateMountain={setStateMountain} />
                </div>
                <div class="grid items-center bg-gray-700 justify-center">
                    { stateMountain() === StateMountain.None && (<p class="text-2xl pr-20 pl-20 ">Construyo experiencias digitales únicas en la web.</p>)}
                    { stateMountain() === StateMountain.Experience && (<Experience/>)}
                    { stateMountain() === StateMountain.Skills && (<Skills/>)}
                    { stateMountain() === StateMountain.Projects && (<Projects/>)}
                </div>

            </section>
        </>
    )
} 