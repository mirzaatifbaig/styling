import {Rocket} from "./Rocket.jsx";
import explorer from './assets/rocketman.png'
import adventurer from './assets/rocketdab.png'
import luxury from './assets/rocketlaunch.png'
export const Rockets = () => {
    return (
        <section
            id="rockets"
            className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                Our Rockets
            </h2>
            <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
                <Rocket
                    title={"Explorer"}
                    price={"$"}
                    text={"Affordable Exploration"}
                    src={explorer}
                    alt="Explorer"
                />

                <Rocket
                    src={adventurer}
                    alt="Adventurer"
                    title={"Adventurer"}
                    price={"$$"}
                    text={"Best Selling Rocket!"}
                />

                <Rocket
                    src={luxury}
                    alt="Infinity"
                    title={"Infinity"}
                    price={"$$$"}
                    text={"Luxury Starship"}
                />
            </ul>
        </section>
    );
};
