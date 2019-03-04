import React from 'react';

import Navbar from './components/Navbar';

const App = ({ children }) => (
  <div className="container">
    <header>
      <Navbar />
    </header>

    <main>
      {children}
    </main>

    <footer>
      <p> Footer </p>
    </footer>
  </div>
);

export default App;
