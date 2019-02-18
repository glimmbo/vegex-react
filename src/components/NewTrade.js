import React, { Component } from 'react';
import { Trade } from '../requests'

export default class NewTrade extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: []
    }

    this.createTrade = this.createTrade.bind(this);
  }

  createTrade(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    
    Trade.create({
      produce: formData.get("produce"),
      quantity: formData.get("quantity")
    }).then(data => {

      if (typeof data.id === "number") {
        this.props.history.push(`/my_trades/`);
        
      } else {
        this.setState({ errors: data.errors });
      }
    });
  }

  render() {
    return (
      <main>
        <h2>What do you have to trade?</h2>
        <form onSubmit={this.createTrade}>
          <div>
            <label htmlFor="produce">Produce</label> <br />
            <input type="produce" name="produce" id="produce" />
          </div>
          <br/>
          <p>Once someone is interested in trading with you, barter will take place.</p>
          <input type="submit" className="btn btn-primary" value="List my trade"/>
        </form>
      </main>
    )
  }
}