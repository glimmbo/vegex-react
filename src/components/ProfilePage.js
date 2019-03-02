import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { User } from '../requests'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: sessionStorage.getItem('name'),
      about: sessionStorage.getItem('about'),
      address: sessionStorage.getItem('address'),
      completion: sessionStorage.getItem('completion')
    }
  }

  render() {
    return (
      <main className="login">
        <div className="card mr-5 ml-5 mt-3">
          <div className="card-body">
            <h3 className="card-text">{this.state.name}</h3>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">About: {this.state.about}</li>
            <li className="list-group-item">Location: {this.state.address}</li>
            <li className="list-group-item">Deal Completion Rate: {this.state.completion} %</li>
          </ul>
          <div className="card-body container">
            <div className="row">
              <Link to={`/edit_profile`}>
                <button className="btn btn-outline-dark btn-sm col">Edit Account Details</button>
              </Link>
                <button className="btn btn-outline-dark btn-sm col" disabled>Support (mailer job)</button>
                <button className="btn btn-outline-dark btn-sm col" disabled>Tutorial (tour library)</button>
            </div>
          </div>
        </div>
      </main>
    )
  }
}