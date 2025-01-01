import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";


// import Home from '../Home'; // Example Home component
// import About from './About'; // Example About component

// App component that includes BrowserRouter for routing
const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Define the routing logic */}
        <Routes>
          {/* Define routes for each page */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/hitta-hus" element={<Home />} />
          <Route path="/upptack-omrade" element={<About />} />
          <Route path="/mina-favoriter" element={<About />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/kontakta-oss" element={<About />} /> */}
        </Routes>

        {/* Footer and Header components that contains the links */}
        <Header />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
