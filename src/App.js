import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <div>123</div>
    </BrowserRouter>
  )
}