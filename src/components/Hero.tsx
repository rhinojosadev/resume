import Avatar from '../avatar.jpeg';
export const Hero = () => { 
    return (
        <>
            <section class="grid grid-cols-2 h-9/10">
                <div class="grid text-white">
                    <div class="grid justify-center" >
                        <p>Software Engineer</p>
                    </div>
                    <div class="grid justify-center" >
                        <p class="text-4xl">Construyo experiencias digitales únicas, <br/> hasta el último fragmento </p>
                    </div>
                    <div class="grid justify-center" >
                        Contacto
                    </div>
                </div>

                <div class="flex items-center justify-center">
                    <img class="rounded-full" height={'200px'} width={'200px'} src={Avatar} alt="avatar"/>
                </div>

            </section>
        </>
    )
} 