import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';
import Footer from './components/Footer';


function App() {
  return (

    <Router>
      <div className="App">
        <Header>
          <Hero />
        </Header>


        <Route path="/" exact component={Home} />
        <Route path="/contactus"  component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />

       <Footer />
        
      </div>
    </Router>
    
  );
}

export default App;
