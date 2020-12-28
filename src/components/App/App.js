import React from 'react';
import './App.css';

// CUSTOM COMPONENT
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div>
      <Header hdg="Colour Palette" />
      <main className="container">
        <p>Chosen colors in the palette.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
