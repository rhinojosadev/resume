import { Hiker } from '../../images/Icons';
import styles from "./mountain.module.css";

export const ButtonStart = ({ setShowStart }) => {
    return (
        <div class="absolute  
                top-15
                left-50
                xl:top-90
                xl:left-50
                lg:top-60 
                lg:left-40 
                md:top-15 
                md:left-80
                sm:top-15   
                sm:left-90
                ">
            <button onClick={() => {
                setShowStart(false)
            }} >Click para comenzar 
                <i class={styles.hiker}>
                    <Hiker/>
                </i>
            </button>
        </div>
    )
}