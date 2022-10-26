import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home';
import { useEffect } from 'react';

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
        </Routes>
        <Footer/>
      </Router>
      
   
  
  );
}

export default App;
