import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav({val}) {

    return (
        <nav className='tab-bar'>
            <ul>
                <li>
                    <Link to="/" className = {val == 0 ? "tab-list active" : "tab-list"}>
                        <i className="fas fa-user"></i>Friends
                    </Link>
                </li>
                <li>
                    <Link to="/Chats" className = {val == 1 ? "tab-list active" : "tab-list"}>
                        <i className="fas fa-comment"></i>Chats
                    </Link>
                </li>
                <li>
                    <Link to="/Find" className = {val == 2 ? "tab-list active" : "tab-list"}>
                        <i className="fas fa-search"></i>Find
                    </Link>
                </li>
                <li>
                    <Link to="/More" className = {val == 3 ? "tab-list active" : "tab-list"}>
                        <i className="fas fa-ellipsis-h"></i>More
                    </Link>
                </li>
            </ul>
        </nav>
    );
    
}
export default Nav;

