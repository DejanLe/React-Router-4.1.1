import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
<div>
  <Router>
      <div>
         <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link  to="/" activeclassName="activeNav" className="navbar-brand">Portfolio</Link>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                      <li><Link exact activeclassName="activeNav"  to="/">Home</Link></li>
                      <li><Link  to="/about"  activeclassName="activeNav">About</Link></li>
                      <li><Link  to="/contact" activeclassName="activeNav">Contact</Link></li>
                </ul>
                </div>
              </div>
            </nav> 

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
    </div>
    </Router>
    <Footer />
      </div>
  ,
  document.getElementById('root')

);
