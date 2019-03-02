import React, { Component } from 'react';
import { User } from '../requests.js'

export default class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: []
    };

    this.createUser = this.createUser.bind(this);
  }

  createUser(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    User.create({
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      about: formData.get("about"),
      range: formData.get("range"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation")
    }).then(data => {
      const { onSignUp = () => {} } = this.props;

      if (typeof data.id === "number") {
        onSignUp().then(() => {this.props.history.push("/")});
        
      } else {
        this.setState({ errors: data.errors });
      }
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <main className="login">
        <h1 className="login-text">Welcome to VegExchange</h1>
        <p className="login-text" ><b>
        This is a platform for home gardeners and small farmers to connect and trade their produce with each other.
          The goal is to reduce waste, build community in small agriculture, and allow growers to get more for what they grow.
        </b></p>
        <div className="card p-3 m-3 mr-5 ml-5">
          <form onSubmit={this.createUser} className="form-group">
            {errors.length > 0 ? (
              <div className="FormErrors">
                {errors.map(e => e.message).join(", ")}
              </div>
            ) : null}
            <div>
              <label htmlFor="name">Name</label> <br />
              <input type="name" name="name" id="name" className="form-control"/>
              <p><small>This will be displayed to other traders</small></p>
            </div>
            <div className="form-group">
              <label htmlFor="about">About me</label> <br />
              <textarea className="form-control" name="about" id="about" defaultValue={sessionStorage.getItem('about')}></textarea>
              <p><small>What do you specialize in growing? What produce do you look to acquire most often?</small></p>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label> <br />
              <input className="form-control" type="address" name="address" id="address" placeholder={sessionStorage.getItem('address')}/>
              <p><small>This won't be shown to anyone, it's just to get a rough measure on your distance from other traders.</small></p>
            </div>
            <div>
              <label htmlFor="range">How far are you willing to travel to trade with someone? (km)</label> <br />
              <input type="text" name="range" id="range" className="form-control"/>
            </div>
            <br/>
            <div>
              <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" id="email" className="form-control"/>
              <p><small>Your email will only be shown to trade partners you settle a barter with.</small></p>
            </div>
            <div>
              <label htmlFor="password">Password</label> <br />
              <input type="password" name="password" id="password" className="form-control"/>
            </div>
            <div>
              <label htmlFor="password_confirmation">Password Confirmation</label> <br />
              <input type="password" name="password_confirmation" id="password_confirmation" className="form-control"/>
            </div>
            <br/>
            <input type="submit" value="Sign me up!" className="btn btn-primary"/>
          </form>

        </div>
      </main>
    );
  }
}
