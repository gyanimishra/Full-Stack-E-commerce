import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home';
import { useEffect } from 'react';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import LoginSignup from './components/user/LoginSignup';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
  <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  exact path="/product/:id" element={<ProductDetails/>} />
          <Route  exact path="/products" element={<Products/>} />
          <Route path="/products/:keyword" element={<Products/>} />

          <Route  exact path="/Search" element={<Search/>} />
          <Route  exact path="/Account" element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </Router>
      
   
  
  );
}

export default App;
