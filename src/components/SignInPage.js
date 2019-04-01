import React, { Component } from 'react';
import { Session } from '../requests.js';
import { Link } from 'react-router-dom'

export default class SignInPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: []
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(data => {
      const { onSignIn = () => {} } = this.props;
      if (typeof data.id === "number") {
        onSignIn()
        this.props.history.push("/") 
        window.location.reload()
      } else {
        this.setState({ errors: [{ message: "Wrong email or password!" }] });
      }
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <main className="login">
        <h1 className="login-text">VegExchange</h1>
        <div className="card p-3 m-5">
          <form onSubmit={this.createSession} className="form-group">
            {errors.length > 0 ? (
              <div className="FormErrors">
                {errors.map(e => e.message).join(", ")}
              </div>
            ) : null}

            <div>
              <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" id="email" className="form-control" />
            </div>

            <div>
              <label htmlFor="password">Password</label> <br />
              <input type="password" name="password" id="password" className="form-control" />
            </div>
            <br/>
            <span>
              New here? <Link to='/sign_up'>Sign up!</Link>
              <input type="submit" value="Sign In" className="btn btn-primary float-right"/>
            </span>
          </form>
        </div>
      </main>
    );
  }
}
