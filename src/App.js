import { Route, Switch } from 'react-router';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Payment from './components/Payment';
import Success from './components/Success';
import ScrollToTop from './components/ScrollToTop'
import Login from './components/Login';
import { useItemValue } from './components/StateProvider'
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {

  const [{ user }, dispatch] = useItemValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="app">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
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
