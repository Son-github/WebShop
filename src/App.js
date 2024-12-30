import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Header from './components/Header';
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
            <div className="container">
                <Routes>
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login"
                           element={<Login onLogin={setIsLoggedIn} />} />
                    <Route path="/join" element={<Join />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

