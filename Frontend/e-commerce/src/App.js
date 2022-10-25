import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
  <Router>
        <Header/>
        
        <Footer/>
      </Router>
      
   
  
  );
}

export default App;
