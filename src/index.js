import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/common/Navbar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Navbar />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
