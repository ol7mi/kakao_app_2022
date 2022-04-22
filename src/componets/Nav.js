import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
    return (
        <nav className='tab-bar'>
            <ul>
                <li>
                    <Link to="/" className="tab-list">
                        <i className="fas fa-user"></i>Friends
                    </Link>
                </li>
                <li>
                    <Link to="/Chats" className="tab-list">
                        <i className="fas fa-user"></i>Chats
                    </Link>
                </li>
                <li>
                    <Link to="/Find" className="tab-list">
                        <i className="fas fa-user"></i>Find
                    </Link>
                </li>
                <li>
                    <Link to="/More" className="tab-list">
                        <i className="fas fa-user"></i>More
                    </Link>
                </li>
            </ul>
        </nav>
    );
    
}
export default Nav;

