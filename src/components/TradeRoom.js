// a representation of a table with each participants' offers on it
import React, { Component } from 'react';


export default class TradeRoomPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trade: this.props.trade
    }
  }
  

  //need to have quantities history array for each trade
  render() {
    return (
      <main>
        <h1>Trade with `username`</h1>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>Carrots →</span> <span className="float-right">← Kale</span>
            </li>
            <li className="list-group-item">Jerry:</li>
            <li className="list-group-item">Me:</li>
            <li className="list-group-item">Jerry:</li>
            <li className="list-group-item">Me: </li>
            <li className="list-group-item">Jerry:</li>
          </ul>

        </div>
      </main>
    )
  }
}