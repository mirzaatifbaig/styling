import {Rocket} from "./Rocket.jsx";

export const Rockets = () => {
    return <section id="rockets"
                    className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Our Rockets
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">

            <Rocket title={"Explorer"} price={"$"} text={"Affordable Exploration"} src={"src/assets/rocketman.png"}
                    alt="Explorer"/>

            <Rocket src="src/assets/rocketdab.png" alt="Adventurer" title={"Adventurer"} price={"$$"}
                    text={"Best Selling Rocket!"}/>

            <Rocket src="src/assets/rocketlaunch.png" alt="Infinity" title={"Infinity"} price={"$$$"}
                    text={"Luxury Starship"}/>
        </ul>
    </section>;
}