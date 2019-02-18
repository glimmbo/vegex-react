import React, { Component } from 'react';
import OpenTrade from './OpenTrade';
import { Trade } from '../requests'
import ReactModal from 'react-modal';
import MakeOfferModal from './MakeOfferModal'

export default class OpenTradesPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: sessionStorage.getItem('id'),
      trades: [],
      showModal: false,
      modalTrade: null
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  

  getOpenTrades() {
    return (
      Trade.openTrades().then(data => {
        this.setState({
          trades: data.trades
        })
      })
    )
  }

  getSearchedTrades(term) {
    return (
      Trade.search(term).then(data => {
        this.setState({
          trades: data.trades
        })
      })
    )
  }

  componentDidMount() {
    this.getOpenTrades()
  }

  handleOpenModal (tradeId, index) {
    this.setState({
      showModal: true,
      modalTrade: this.state.trades[index]
    })
  }

  handleCloseModal() {
    this.setState({ showModal: false})
  }

  render() {
    return (
      <main>
        <h2>Open Trades</h2>
        <p>Select an available trade below to make an offer</p>

        <form onSubmit={this.getSearchedTrades} className="input-group">
          <input className="form-control" type="text" name="term" placeholder="What are you looking for?"/>
          <span>
          <input type="button" name="filter" id="filter" className="btn btn-primary input-group-btn ml-2" value="Search"/>
          </span>
        </form>
        <br/>

        <table className="table table-sm table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" style={{width: "50%"}}>Produce</th>
              <th scope="col" style={{width: "10%"}}>Distance</th>
              <th scope="col" style={{width: "30%"}}>Trader</th>
              <th scope="col" style={{width: "10%"}}>Completion Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trades.map((trade, index) => (
              <OpenTrade trade={trade} handleRowClick={() => this.handleOpenModal(trade.id, index)}/> 
            ))}
          </tbody>
        </table>

        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Make offer"
          ariaHideApp={false}
          style={{content:{top:"150px", bottom:"200px"}}}
        >
          <MakeOfferModal
            handleCancel={this.handleCloseModal}
            handleSubmit={this.handleOffer}
            trade={this.state.modalTrade}/>

        </ReactModal>

      </main>
    )
  }
}