import React from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/Products/ProductGrid';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content container">
                    <h1 className="hero-title">Elevate Your Lifestyle</h1>
                    <p className="hero-subtitle">Discover our curated collection of premium essentials.</p>
                </div>
            </section>

            <section id="products" className="section-padding container">
                <div className="section-header">
                    <h2>Featured Collection</h2>
                    <p>Handpicked for the discerning taste.</p>
                </div>
                <ProductGrid products={products} />
            </section>

            <section className="about-section section-padding">
                <div className="container">
                    <div className="about-content">
                        <h2>Our Philosophy</h2>
                        <p>We believe in quality over quantity. Every item in our catalog is selected for its craftsmanship, durability, and timeless design.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
