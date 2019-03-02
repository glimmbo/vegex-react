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
        <h1>My Local Market (in development)</h1>
          <div className="d-flex flex-row">
            <img src="/assets/radar-chart.png" alt=""/>
            <h3>
              <ul>
                <li>Chart.js supply/demand graph for crop types in the area, top help growers choose high demand crops</li>
                <li>Live "ticker" of trade events and listings in your area</li>
                <li>Instagram feed for #vegex</li>
              </ul>
            </h3>
          </div>
      </main>
    )
  }
}