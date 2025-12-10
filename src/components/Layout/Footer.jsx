import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>LUXE</h3>
                    <p>Curated essentials for the modern lifestyle.</p>
                </div>
                <div className="footer-section">
                    <h4>Shop</h4>
                    <a href="#">New Arrivals</a>
                    <a href="#">Best Sellers</a>
                    <a href="#">Accessories</a>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">Sustainability</a>
                    <a href="#">Contact</a>
                </div>
                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 LUXE Retail. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
