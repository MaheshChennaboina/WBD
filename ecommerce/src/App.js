import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from './screens/ProductScreen'
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path ='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/shipping' component={ShippingScreen}/>
        <Route path='/payment' component={PaymentScreen}/>
        <Route path='/order/:id' component={OrderScreen}/>

      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;

