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
      console.log(data)
      if (typeof data.trade.id === "number") {
        alert("Trade started! Now just wait for the offers to come in.")
        this.props.handleSubmit()
        
      } else {
        this.setState({ errors: data.errors });
      }
    });
  }

  render() {
    // need to switch input to selection of icon/category
    return (
      <div>
        <h2>What do you have to trade?</h2>
        <form onSubmit={this.createTrade}>
          <div>
            <label htmlFor="produce">Produce</label> <br />
            <input type="produce" name="produce" id="produce" />
          </div>
          <br/>
          <p>Once someone is interested in trading with you, bartering over quantities will take place.</p>
          <button onClick={this.props.handleCancel} className="btn btn-danger mr-3" value="Cancel">Cancel</button>
          <input type="submit" className="btn btn-success" value="List my trade"/>
        </form>
      </div>
    )
  }
}