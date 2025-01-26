import { GithubIcon, LinkedinIcon } from "../images/Icons"

export const Header = () => {
    return (
        <>
            <nav class="grid grid-cols-2 p-8 text-white">
                <div class="w-100  self-center">
                    <div class="grid justify-center">
                        <span>
                            <span class="font-medium"> René </span> Hinojosa
                        </span>
                    </div>
                </div>
                <div class="grid">
                    <ul class="flex flex-wrap items-center justify-center">
                        <li class="mr-5"><a href="https://www.linkedin.com/in/rhinojosadev/"><LinkedinIcon /></a></li>
                        <li><a href="https://github.com/rhinojosadev"><GithubIcon /></a></li>
                    </ul>

                </div>
            </nav>
        </>
    )
}