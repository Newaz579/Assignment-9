import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <div>
                <h2>Quiz Hunter</h2>
            </div>
            <div className='header-topics'>
                <Link to='/home'><strong>Home</strong></Link>
                <Link to='/statistics'><strong>Statistics</strong></Link>
                <Link to='/blog'><strong>Blog</strong></Link>
            </div>
        </nav>
    );
};

export default Header;