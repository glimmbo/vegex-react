import React, { Component } from 'react';

export default class NotificationsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <main>
        <h1>Notifications</h1>
        <div className="card">
          {/* maybe a notification component required? */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">User wants your carrots</li>
            <li className="list-group-item">Your beets are about to expire</li>
            <li className="list-group-item">New message from user1</li>
            <li className="list-group-item">Just listed: what you're looking for</li>
            <li className="list-group-item">New offer for your lettuce, table 1</li>
            <li className="list-group-item">New message from user2</li>
            <li className="list-group-item">New review from user3</li>
            <li className="list-group-item">Just listed: what you're looking for</li>
          </ul>

        </div>
      </main>
    )
  }
}