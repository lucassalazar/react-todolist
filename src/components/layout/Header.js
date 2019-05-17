import React from 'react';
import { Link } from 'react-router-dom';

// Functional Component
function Header () {
    return (
        <header style={ headerStyle }>
            <h1 style={{ color: 'lightseagreen' }}>To Do List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    );
}

const headerStyle = {
    backgroundColor: '#0008',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff'
}

export default Header;