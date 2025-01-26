import Avatar from '../images/avatar.jpeg';

export const Experience = () => {  
    return(
        <>
            <section class="grid">
                <div class="flex justify-center w-full">
                    <img class="rounded-full" height={'200px'} width={'200px'} src={Avatar} alt="avatar"/>
                </div>
                <p  class='p-10'>Con mas de 10 años trabajando en el área de software, he desarrollado, mantenido y creado distintas aplicaciónes tanto web como móviles.</p>
                <p  class='p-10'>Mas que la técnologia o la herramienta a utilizar, los puntos prinicpales para llegar a un proyecto que entrege valor son: </p>
                <ul class='p-10 list-inside'>
                    <li>Identificar bien el problema</li>
                    <li>Entender el problema</li>
                    <li>Reunir los requerimientos</li>
                    <li>Hacer una buena planeacion</li>
                    <li>Dispocicion y compromiso mutua</li>
                </ul>
            </section>
        </>
    )
}