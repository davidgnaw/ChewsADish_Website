import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popular from './components/pages/Popular'
import Gallary from './components/pages/Gallary'
import UserPage from './components/pages/UserPage'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Popular' exact component={Popular} />
          <Route path='/Gallary' exact component={Gallary} />
          <Route path='/UserPage' exact component={UserPage} />
          <Route path='/SignUp' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;