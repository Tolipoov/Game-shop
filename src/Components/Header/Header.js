import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Cartblock from '../CartBlock/Cartblock';

const Header = () => {
    return (
        <div className='header'>
                <div className='wrapper'>
                    <Link to='/' className='header-link-store-title'>Game store</Link>
                </div>
                <div className='wrapper header-cart-btn'>
                    <Cartblock/>
                </div>
        </div>
    );
};

export default Header;