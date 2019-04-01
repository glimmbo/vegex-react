import React, { Component } from 'react';
import { Offer, Trade } from "../requests"

export default class TradeWithOffers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trade: this.props.trade,
      value: "empty",
      buttonDisabled: true,
      errors: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseTrade = this.handleCloseTrade.bind(this);
  }

  handleChange(event) {
    
      this.setState({
        value: event.target.value,
        buttonDisabled: event.target.value === "empty" ? true : false
      })
    
  }

  handleSubmit(event) {
    event.preventDefault();

    Offer.accept({
      id: this.state.value,
      trade_id: this.state.trade.id
    }).then(data => {
      if (data.errors)
        this.setState({errors: data.errors})
      else
        Trade.acceptOffer({ trade: {
          id: this.state.trade.id,
          accept: {
            offer_id: this.state.value
            }
          }
        }).then(data => {
          alert('updated trade with offer_id: ' + this.state.value);
        })
    })
  }

  handleCloseTrade() {
    console.log('change aasm_state')
  }

  render() {
    return (
      <>
        <p>{`My ${this.state.trade.produce} has ${this.state.trade.offers.length} offers`}</p>
        {this.state.errors.length > 0 ? (`<p> ${this.state.errors} </p>`) : null}
        <select onChange={this.handleChange} value={this.state.value}>
            <option value="empty">Choose an offer</option>
          {this.state.trade.offers.map(offer => (
            <option value={offer.id}>
            {`${offer.produce}, ${offer.distance}km away, from ${offer.user.name}, with ${offer.user.completion}%, ${offer.aasm_state}`}
            </option>
          ))}
        </select>
        <button onClick={this.handleSubmit} className="float-right" disabled={this.state.buttonDisabled}>
          Accept this offer
        </button>
        <button onClick={this.handleCloseTrade} className="float-right">
          Close this trade
        </button>
      </>
    )
  }
}