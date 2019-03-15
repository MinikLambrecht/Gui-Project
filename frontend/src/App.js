/**
 * Main component that is the core of our SPA
 */

import React from 'react';                  // Imports dependencies from react

import Navbar from './components/Navbar';   // Imports our Navbar Component

/**
 * Renders our SPA 
 */
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
