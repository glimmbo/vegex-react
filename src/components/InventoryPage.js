import React, { Component } from 'react';

export default class InventoryPage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <main>
        <h1>Inventory</h1>
        <table className="table table-sm table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Weight</th>
              <th scope="col">Harvest</th>
              <th scope="col">Expiry</th>
              <th scope="col">Picture</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* colors for freshness overview (optional) */}
            <tr className="table-success"> 
              <td>Carrot (Icon)</td>
              <td>500g</td>
              <td>3 days ago</td>
              <td>10 days</td>
              <td>Thumb</td>
              <td>Details</td>
            </tr>
            <tr className="table-danger">
              <td>Beet (Icon)</td>
              <td>500g</td>
              <td>11 days ago</td>
              <td>2 days</td>
              <td>Thumb</td>
              <td>Details</td>
            </tr>
            <tr className="table-warning">
              <td>Lettuce (Icon)</td>
              <td>500g</td>
              <td>4 days ago</td>
              <td>4 days</td>
              <td>Thumb</td>
              <td>Details</td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-success float-right">New Item</button>
      </main>
    )
  }
}