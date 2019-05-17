import React from 'react';

function Footer() {
  return (
    <footer style={ footerStyle }>
        Built by { }
        <i style={{ color: 'lightseagreen' }} className="fab fa-github"></i> 
        <a href="https://github.com/lucassalazar" target="__blank" >Lucas</a>.
    </footer>
  );
}

const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    right: '0',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center'
}

export default Footer;