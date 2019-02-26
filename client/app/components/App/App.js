import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <>
    <div className="container">
      <header>
        <Header />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  </>
);

export default App;
