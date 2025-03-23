import {Hero} from "./Hero.jsx";
import {Contact} from "./Contact.jsx";
import {Testimonials} from "./Testimonials.jsx";
import {Rockets} from "./Rockets.jsx";

export const Main = () => {
    return <main className="mx-auto max-w-4xl">
            <Hero/>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white"/>
            <Rockets/>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white"/>
            <Testimonials/>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white"/>
            <Contact/>
    </main>;
}