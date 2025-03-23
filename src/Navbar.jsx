export function Navbar() {
    return (
        <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
        >
            <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
                Home
            </a>
            <a href="#rockets" className="w-full py-6 text-center hover:opacity-90">
                Our Rockets
            </a>
            <a
                href="#testimonials"
                className="w-full py-6 text-center hover:opacity-90"
            >
                Testimonials
            </a>
            <a href="#contact" className="w-full py-6 text-center hover:opacity-90">
                Contact Us
            </a>
            <a href="#footer" className="w-full py-6 text-center hover:opacity-90">
                Legal
            </a>
        </nav>
    );
}
