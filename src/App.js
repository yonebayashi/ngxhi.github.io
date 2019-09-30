import React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="line"></div>

      <Switch>
        <Route exact path="/" component={About}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
      </Switch>

      <div className="line"></div>

      <Footer />
    </div>
  );
}

export default App;
