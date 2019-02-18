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
      <main>
        <h2>Profile</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <p className="card-text">{this.state.about}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Location: {this.state.address}</li>
            <li className="list-group-item">Deal Completion Rate: {this.state.completion} %</li>
          </ul>
          <div className="card-body container">
            <div className="row">
              <Link to={`/edit_profile`}>
                <button className="btn btn-outline-dark btn-sm col">Edit Account Details</button>
              </Link>
              {/* <Link> */}
                <button className="btn btn-outline-dark btn-sm col" disabled>Support (mailer job)</button>
              {/* </Link> */}
              {/* <Link> */}
                <button className="btn btn-outline-dark btn-sm col" disabled>Tutorial (tour library)</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </main>
    )
  }
}