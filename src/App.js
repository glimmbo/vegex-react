import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from './components/AuthRoute'
import { User, Session } from './requests';
import Nav from './components/Nav'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import ProfilePage from './components/ProfilePage'
import EditProfilePage from './components/EditProfilePage'
import OpenTradesPage from './components/OpenTradesPage'
import TradesPage from './components/MyTradesPage'
import TradeRoomPage from './components/TradeRoomPage'
import LocalMarketPage from './components/LocalMarketPage'
import NewTrade from './components/NewTrade'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      loading: true
    };

    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    this.setState({
      currentUser: null
    });
    Session.destroy();
    sessionStorage.clear()
  }

  getCurrentUser() {
    console.log("getCurrentUser()")
    return User.current().then(data => {
      const { current_user: currentUser } = data;
      console.log(currentUser)
      if (currentUser) {
        this.setState({ currentUser });
        sessionStorage.setItem('id', currentUser.id);
        sessionStorage.setItem('name', currentUser.name);
        sessionStorage.setItem('email', currentUser.email);
        sessionStorage.setItem('address', currentUser.address);
        sessionStorage.setItem('range', currentUser.range);
        sessionStorage.setItem('about', currentUser.about);
        sessionStorage.setItem('completion', currentUser.completion);
        sessionStorage.setItem('slots', currentUser.slots);
        sessionStorage.setItem('slot_available', currentUser.slot_available);
      }
      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    const { currentUser } = this.state;

    if (this.state.loading === true) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <BrowserRouter>
        <div className="container-fluid p-0">
          <Nav currentUser={currentUser} onSignOut={this.destroySession}/>
          <Switch>
            <Route
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />
              )}
            />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
              )}
            />
            <AuthRoute
              isAuth={this.state.currentUser}
              exact
              path="/profile"
              component={ProfilePage}
            />
            <AuthRoute
              isAuth={this.state.currentUser}
              exact
              path="/edit_profile"
              component={EditProfilePage}
            />
            <AuthRoute
              isAuth={this.state.currentUser}
              exact
              path="/open_trades"
              component={OpenTradesPage}
            />
            <AuthRoute
              isAuth={this.state.currentUser}
              exact
              path="/trades/new"
              component={NewTrade}
            />
            <AuthRoute
              isAuth={this.state.currentUser}
              exact
              path="/my_trades"
              component={TradesPage}
            />
            <AuthRoute
              isAuth={this.state.currentUser}
              exact
              path="/trades/:trade_id"
              component={TradeRoomPage}
            />
            <Route
              exact
              path="/"
              component={this.state.currentUser ? LocalMarketPage : SignInPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
