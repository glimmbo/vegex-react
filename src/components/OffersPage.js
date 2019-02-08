import React, { Component } from 'react';

export default class OffersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <main>
        <h1>Offers</h1>
        <p>clickable to a modal that gives more details, and submit offer response</p>
        <input class="form-control" type="text" placeholder="Search"></input>
        <table className="table table-sm table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Distance</th>
              <th scope="col">Name</th>
              <th scope="col">Deal Completion</th>
              {/* <th scope="col">Expiry</th> */}
            </tr>
          </thead>
          <tbody>
            <tr> 
              <td>Squash (Icon)</td>
              <td>5km</td>
              <td>Terry</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>Tomatoe (Icon)</td>
              <td>7km</td>
              <td>Susan</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>Kale (Icon)</td>
              <td>11km</td>
              <td>Mike</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </main>
    )
  }
}