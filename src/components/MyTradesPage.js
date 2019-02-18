import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Trade } from '../requests'
// import TradeRoom from './TradeRoom'

export default class MyTradesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trades: [],
      offers: []
    }
  }

  componentDidMount() {
    Trade.myTrades().then(data => {
      console.log(data)
      this.setState({
        trades: data.trades,
        offers: data.offers
      })
    })
    console.log("Trades:", this.state.trades, "Offers", this.state.offers)
  }

  render() {
    return (
      <main>
        <h2>My Active Trades</h2>
        <div id="myTrades" className="card">
          <ul className="list-group list-group-flush">
          {this.state.trades.map(trade => (
            <li className="list-group-item" key="trade.id">
                <p>{`My ${trade.produce} for ${trade.user_name}'s ${trade.offer_produce}`}</p>
            </li>
          ))}
            {/* start a new trade button */}
          </ul>
        </div>
        <br/>


        <h2>Offers I've Made</h2>
        <div id="myOffers">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
            </li>
            <li className="list-group-item">
            </li>
            <li className="list-group-item">
            </li>
            <li className="list-group-item">
            </li>
          </ul>
        </div>
      </main>
    )
  }
}