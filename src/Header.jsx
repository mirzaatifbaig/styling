import {Navbar} from "./Navbar.jsx";
import {useEffect, useRef} from "react";

export function Header() {
    const menuRef = useRef(null); // Reference to the mobile menu

    const toggleMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.toggle("hidden");
            menuRef.current.classList.toggle("flex");
        }
    };

    // Close the menu when clicking inside it
    useEffect(() => {
        const handleMenuClick = (event) => {
            if (menuRef.current && event.target.closest("#mobile-menu")) {
                toggleMenu(); // Closes the menu when clicking inside
            }
        };

        const menuElement = menuRef.current;
        if (menuElement) {
            menuElement.addEventListener("click", handleMenuClick);
        }

        return () => {
            if (menuElement) {
                menuElement.removeEventListener("click", handleMenuClick);
            }
        };
    }, []);

    return (
        <header className="sticky top-0 z-10 bg-teal-700 text-white">
            <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
                <h1 className="text-3xl font-medium">
                    <a href="#hero">🚀 Acme Rockets</a>
                </h1>
                <div>
                    {/* Hamburger button */}
                    <button
                        id="hamburger-button"
                        onClick={toggleMenu}
                        className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
                    >
                        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500
                                       before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white
                                       before:transition-all before:duration-500 before:content-['']
                                       after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white
                                       after:transition-all after:duration-500 after:content-['']">
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
                        <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                        <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                        <a href="#contact" className="hover:opacity-90">Contact Us</a>
                    </nav>
                </div>
            </section>

            {/* Mobile Menu */}
            <section
                id="mobile-menu"
                ref={menuRef}
                className="absolute top-[68px] hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl"
            >
                <Navbar/>
            </section>
        </header>
    );
}
