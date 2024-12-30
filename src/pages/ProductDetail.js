import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../mockData';
import '../styles/ProductDetail.css';

function StarRatingInput({ rating, setRating }) {
    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (
        <div className="star-rating-input">
            {Array.from({ length: 5 }, (_, index) => (
                <span
                    key={index}
                    className={`star ${rating > index ? 'filled' : ''}`}
                    onClick={() => handleRatingChange(index + 1)}
                >
          ★
        </span>
            ))}
        </div>
    );
}

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState(product.reviews || []);
    const [newRating, setNewRating] = useState(0);
    const [newReview, setNewReview] = useState('');

    if (!product) {
        return <p>Product not found!</p>;
    }

    const handleAddToCart = () => {
        alert(`${quantity} ${product.name}(s) have been added to your cart!`);
    };

    const handleSubmitReview = () => {
        if (newRating === 0 || newReview.trim() === '') {
            alert('Please provide a rating and a review.');
            return;
        }
        const newReviewObj = {
            id: reviews.length + 1,
            rating: newRating,
            text: newReview,
        };
        setReviews([newReviewObj, ...reviews]);
        setNewRating(0);
        setNewReview('');
    };

    return (
        <div className="product-detail">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-company">Company: {product.company || 'N/A'}</p>
                <p className="product-rating">
                    Average Rating: {product.rating || 'No ratings yet'}
                </p>
                <div className="actions">
                    <label>
                        Quantity:
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="quantity-input"
                        />
                    </label>
                    <button
                        className="action-button add-to-cart"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    <button className="action-button buy-now">Buy Now</button>
                </div>
            </div>
            <div className="review-container">
                <h3>Leave a Review</h3>
                <StarRatingInput rating={newRating} setRating={setNewRating} />
                <textarea
                    className="review-textarea"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review here..."
                ></textarea>
                <button onClick={handleSubmitReview} className="submit-review-button">
                    Submit Review
                </button>

                <h3>Customer Reviews</h3>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="review">
                            <div className="star-rating">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index} className={review.rating > index ? 'filled' : ''}>
                    ★
                  </span>
                                ))}
                            </div>
                            <p>{review.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductDetail;








