import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from './screens/ProductScreen'
import SignUp from "./screens/SignUp";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path ='/login' component={LoginScreen} />
        <Route path='/signup' component={SignUp}/>

      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;

