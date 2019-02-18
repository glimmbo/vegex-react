import React, { Component } from 'react';

export default class LocalMarketPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <main>
        <h1>My Local Market</h1>
        <h3>
          <ul>
            <li>crop S/D radar graph</li>
            <li>completed trades feed ticker</li>
            <li>instagram feed of #vegex</li>
          </ul>
        </h3>
      </main>
    )
  }
}