import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    <h1>Iconic International</h1>
                </div>
                <nav className="nav">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#products" className="nav-link">Collection</a>

                </nav>

            </div>
        </header>
    );
};

export default Header;
