// a representation of a table with each participants' offers on it
import React, { Component } from 'react';
import { Trade } from '../requests';

export default class TradeRoomPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trade: null,
      partner: null
    }
  }

  componentDidMount() {
    Trade.find(this.props.match.params.trade_id
    ).then(data => {
      console.log(data)
      this.setState({
        trade: data.trade,
        partner: data.partner,
        barters: []
      })
    })
  }

  // to have quantities history array for each trade -> array in trade column
  render() {
    if (this.state.trade === null) {
      return (
        <main>
          <h1>Loading...</h1>
        </main>
      )
    }
    console.log(this.state)
    return (
      <main>
        <h1>
          <span className="float-right mb-3">{`${this.state.partner.name}'s ${this.state.trade.offer_produce}`}</span>
        </h1>
        <br/>
        <div className="table-box mt-3 d-flex flex-column justify-items-center">
          <div className="table d-flex flex-row align-items-center container mt-3">
            <div className="col justify-content-center align-content-center">
              <img src="/assets/food/icons8-carrot-100.png" alt="an offer"/>
              <input type="text" className="text" style={{fontSize: '25px'}}/>
            </div>
            <div className="flex-column d-flex justify-content-between align-content-center">
              <button>How about this?</button><br/>
              <button>Accept</button>
            </div>
            <div className="col justify-content-center align-content-center">
              <img src="/assets/food/icons8-lettuce-100.png" alt="an offer" className="float-right"/>
              <input type="text" className="float-right" style={{fontSize: '25px'}}/>
            </div>

          </div>
        </div>
        <h1>
          <span>
            {`${sessionStorage.getItem('name')}'s ${this.state.trade.produce}`}
          </span>
        </h1>
      </main>
    )
  }
}