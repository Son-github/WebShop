import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../mockData';
import '../styles/ProductList.css';

const ITEMS_PER_PAGE = 12; // 한 페이지에 표시할 상품 수

function ProductList() {
    const [currentPage, setCurrentPage] = useState(1);

    // 현재 페이지의 상품 데이터 계산
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = products.slice(startIndex, endIndex);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="product-list">
            <h2>Products</h2>
            <div className="grid-container">
                {currentProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/products/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <h3 className="product-name">{product.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
            {/* 페이지네이션 */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`pagination-button ${
                            currentPage === index + 1 ? 'active' : ''
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

