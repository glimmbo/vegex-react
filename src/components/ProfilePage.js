import React, { Component } from 'react';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'first name',
      picture: 'image', //user uploaded
      dealCompletionRating: '100%', // completed deals/pending deals
      approxLocation: 'city/area code', //location apo
      // tradeReviews: [ //thumb up /down
      //   {like:1,user:'user.name'},
      //   {like:1,user:'user.name'},
      //   {like:0,user:'user.name'},
      //   {like:1,user:'user.name'},
      // ]
    }
  }
  
  render() {
    return (
      <main>
        <h1>Profile</h1>
        <div className="card">
          {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%"></rect><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg> */}
          <img className="card-img-top" src="/public/me.jpg" alt="user profile img" width="100%" height="auto"/>
          <div className="card-body">
            <h5 className="card-title">Mark</h5>
            <p className="card-text">I have a whole backyard of lettuce and carrots, looking to trade for some variety.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Location: Kelowna</li>
            <li className="list-group-item">Deal Completion Rate: 100%</li>
            {/* <li className="list-group-item">Trade Reviews (scrollable list component)</li> */}
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Account Details</a>
            <a href="#" className="card-link">Preferences</a>
            <a href="#" className="card-link">Support</a>
          </div>
        </div>
      </main>
    )
  }
}