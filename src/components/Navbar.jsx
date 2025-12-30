import { useState, useEffect } from 'react';

function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                    {isDark ? '☀️' : '🌙'}
                </button>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
