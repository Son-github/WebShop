import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ isLoggedIn, onLogout}) {
    return (
        <header className="header">
            <h1>Shopping Mall</h1>
            <nav>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                {isLoggedIn ? (
                    <span className="header-link logout-link" onClick={onLogout}>
                        Logout
                    </span>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/join">Join</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;

