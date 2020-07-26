import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import './css/animate.css';
import './css/aos.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
//import './css/owl.theme.default.min.css';
import './css/style.css';
//import './css/owl.carousel.min.css';
import './css/open-iconic-bootstrap.min.css';
import './css/ionicons.min.css';
import './css/icomoon.css';
import './css/flaticon.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Resume />
        <Contact />
    </div>
  );
}

export default App;
