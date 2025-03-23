export const Rocket = ({text, title, price, src, alt}) => (
    <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
        <img src={src} alt={alt} className="mb-6 w-1/2"/>
        <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            {title}
        </h3>
        <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            {price}
        </p>
        <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            {text}
        </p>
    </li>
);
