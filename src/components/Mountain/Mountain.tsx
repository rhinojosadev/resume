import { createSignal } from "solid-js";


import { ButtonStart } from "./ButtonStart";
import { Stairs } from "./Stairs";
import styles from "./mountain.module.css";

export const Mountain = ({setStateMountain}) => {

    const [showStart, setShowStart] = createSignal(true);

    return (
        <div class=
            { styles.mountain + ' relative ' + 
                'bg-[url(src/images/mountain.png)] bg-cover bg-center h-full'} 
        >
            { showStart() &&  <ButtonStart setShowStart={setShowStart} /> }
            { !showStart() && <Stairs setStateMountain={setStateMountain}/> }     
        </div>
    )
}