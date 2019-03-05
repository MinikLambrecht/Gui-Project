import React from 'react';

import Navbar from './components/Navbar';

const App = ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      {children}
    </main>

{/* Uncomment if footer is needed.
    <footer>
      <p> Footer </p>
    </footer>
*/}
  </div>
);

export default App;
