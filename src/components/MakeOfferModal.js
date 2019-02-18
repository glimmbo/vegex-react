import React, { Component } from 'react';
import { Trade } from '../requests'

export default class MakeOfferModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trade: this.props.trade,
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)    
  }
  
  handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Trade.makeOffer({ offer: {
      user_id: sessionStorage.getItem('id'),
      trade_id: this.state.trade.id,
      produce: formData.get('produce')
    }
    }).then(data => {
      if (data.errors)
        this.setState({errors: data.errors})
      else
        alert(`Offer submitted! Check back at 'My Trades' page to see your offer.`)
        this.props.handleCancel()
    })
  }

  render() {
    return(
      <div>
        <h3>Make an Offer</h3>
        <p>What do you have to trade for {this.state.trade.user_name}'s {this.state.trade.produce}?</p>
        <br/>
        <form onSubmit={this.handleSubmit} className="form-group">
          <input type="text" name="produce" className="form-control"/>
          <button onClick={this.props.handleCancel} className="m-2 btn btn-danger">Cancel</button>
          <input type="submit" value="Submit Offer" className="float-right m-2 btn btn-success"/>
        </form>

      </div>
    )
  }
}