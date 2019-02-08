import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav'
import SignInPage from './components/SignInPage'
import ProfilePage from './components/ProfilePage'
import InventoryPage from './components/InventoryPage'
import NotificationsPage from './components/NotificationsPage'
import OffersPage from './components/OffersPage'
import TradesPage from './components/TradesPage'
import TradeRoom from './components/TradeRoom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Route path="/" exact component={SignInPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/inventory" exact component={InventoryPage} />
          <Route path="/notifications" exact component={NotificationsPage} />
          <Route path="/offers" exact component={OffersPage} />
          <Route path="/trades" exact component={TradesPage} />
          <Route path="/trades/1" component={TradeRoom} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
