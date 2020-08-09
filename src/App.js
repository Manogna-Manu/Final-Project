import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './Project/NavBar/Navigation';
import Footer from './Project/Footer/Footer';
import Home from './Project/HomePage/Home';
import Surprises from './Project/SurprisesPage/Surprises';
import Calender from './Project/SurprisesPage/Calender';
import Gifts from './Project/GiftsPage/Gifts';
import About from './Project/AboutPage/About';
import Contact from './Project/ContactPage/Contact';
import Wishlist from './Project/CartPage/Wishlist';
import Explore from './Explore';
import LoginPage from './Project/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/Surprises" component={Surprises}></Route>
      <Route exact path="/Calender" component={Calender}></Route>
      <Route exact path="/Submit" component={Home}></Route>
      <Route exact path="/Gifts" component={Gifts}></Route>
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/Contact" component={Contact}></Route>
      <Route exact path="/Wishlist" component={Wishlist}></Route>
      <Route exact path="/Explore" component={Explore}></Route>
      <Route exact path="/signin" component={LoginPage}></Route>
      <Footer></Footer>

    </div>
  );
}

export default App;
