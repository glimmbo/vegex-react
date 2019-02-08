import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class TradesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <main>
        <h1>Trade Tables</h1>
        <div className="card">
          {/* maybe a notification component required? */}
          <ul className="list-group list-group-flush">
            <Link to="/trades/1">
            <li className="list-group-item">
              <span>My Carrots: 5kg →</span> <span className="float-right">← Jerry's Kale: 3kg</span>
            </li>
            </Link>
            <li className="list-group-item">Unlock by completing more trades</li>
            <li className="list-group-item">Unlock by completing more trades</li>
          </ul>

        </div>
      </main>
    )
  }
}