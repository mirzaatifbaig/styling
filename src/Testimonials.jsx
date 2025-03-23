import {Testimonial} from "./Testimonial.jsx";

export const Testimonials = () => {
    return (
        <section id="testimonials"
                 className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                Testimonials
            </h2>

            <Testimonial by={`&#8212;Wile E. Coyote, Genius`}>
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
            </Testimonial>

            <Testimonial by={`&#8212;Marvin The Martian &amp; K-9`}>
                The Acme Adventurer Rocket has thwarted my Illumine Q-36 Explosive
                Space Modulator on several occasions.
                <span className="italic">This makes me very, very angry!</span>
                Nevertheless, K-9 and I have awarded Acme the Martian contract for
                space exploration rockets based on Acme's quality and sturdy
                designs.</Testimonial>
            <Testimonial by={`&#8212; Buzz Lightyear`}>
                I knew I not only wanted &#8212;
                <span className="italic">I needed</span> &#8212; Acme's Infinity
                Rocket for my mission in space. Acme delivered in one day! Nothing
                says <q className="italic">Take me to your leader</q> like Acme's
                Infinity Rocket! 💯
            </Testimonial>

        </section>
    )
}