import { Route, Switch } from 'react-router';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Payment from './components/Payment';
import Success from './components/Success';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route exact path="/success">
          <Header />
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
