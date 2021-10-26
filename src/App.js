import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderNavbar from './components/HeaderNavbar';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar/>
      <Switch>
      </Switch>
    </BrowserRouter>
  )
}