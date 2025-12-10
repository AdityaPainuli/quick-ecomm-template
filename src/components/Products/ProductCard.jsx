import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                    <button className="btn btn-primary" onClick={() => window.open('https://wa.me/9899667399', '_blank')}>Contact us</button>
                    <button className="btn btn-primary" onClick={() => window.open('mailto:Sumitsaluja26@gmail.com', '_blank')}>Mail us</button>
                </div>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
