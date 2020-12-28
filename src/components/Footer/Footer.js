import React from 'react';

function Footer(props) {
  const footerContainer = {
    padding: '20px 10px',
    textAlign: 'center',
  };

  return (
    <footer style={footerContainer}>
      <p>&copy; Colour Palette</p>
    </footer>
  );
}

export default Footer;
