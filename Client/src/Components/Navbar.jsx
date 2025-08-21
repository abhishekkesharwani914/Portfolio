import React, {useState} from 'react';
// import './Navbar.css'; // Optional: for styling

const navOptions = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contacts', href: '#contacts' },
];

const Navbar = () => {

    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar flex flex-row justify-between items-center p-4 w-full max-w-full h-16 bg-[#f8f7f2] backdrop-blur-md shadow-lg sticky top-0 left-0 right-0 z-50">
            <div className="navbar-left md:px-20 px-5 flex items-center font-bold ">
                <span className="logo caveat-logo text-2xl lg:text-4xl font-bold zoom-in text-[#286f6b]">Abhishek Kesharwani</span>
            </div>
            {/* Hamburger icon for small screens */}
            <div className="sm:hidden px-4">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-8 h-8 text-[#286f6b]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Nav options for screens >= 540px */}
            <div className="navbar-right hidden sm:block">
                <ul className="nav-options flex flex-row justify-between items-center gap-5 text-lg px-20">
                    {navOptions.map(option => (
                        <li key={option.label}>
                            <a
                                href={option.href}
                                className={`hover:bg-[#286f6b] hover:text-white transition duration-200 px-5 py-2 rounded-full ${
                                    active === option.label ? 'bg-[#286f6b] text-white' : ''
                                }`}
                                onClick={() => setActive(option.label)}
                            >
                                {option.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
             {menuOpen && (
                <div
                    className="fixed inset-0 z-60 transition-opacity duration-300 ease-in-out"
                    onClick={() => setMenuOpen(false)}
                >
                    <span className='text-2xl inline-block h-10 w-10 ml-2 mt-2 text-center bg-gray-300 rounded-full leading-8 transition-all duration-300 ease-in-out'>x</span>
                </div>
            )}
            {/* Slide-down menu */}
            <div
                className={`absolute top-0 left-0 w-full bg-[#f8f7f2] shadow-md sm:hidden z-50 transition-all duration-300 ease-in-out ${
                    menuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <ul className="flex flex-col items-center gap-4 py-4">
                    {navOptions.map(option => (
                        <li key={option.label}>
                            <a
                                href={option.href}
                                className={`hover:bg-[#286f6b] hover:text-white transition duration-200 px-5 py-2 rounded-full ${
                                    active === option.label ? 'bg-[#286f6b] text-white' : ''}`}
                                onClick={() => {
                                    setActive(option.label);
                                    setMenuOpen(false);
                                }}
                            >
                                {option.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;