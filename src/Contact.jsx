import {Form} from "./Form.jsx";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
        >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                Contact Us
            </h2>
            <Form/>
        </section>
    );
};
