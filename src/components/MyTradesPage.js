import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Trade } from '../requests'
import TradeWithOffers from "./TradeWithOffers"
import ReactModal from 'react-modal';
import NewTrade from './NewTrade'

export default class MyTradesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trades: [],
      offers_made: [],
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleTradeSubmit = this.handleTradeSubmit.bind(this);
  }

  componentDidMount() {
    Trade.myTrades().then(data => {
      this.setState({
        trades: data.trades,
        offers_made: data.offers_made
      })
    })
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }
  
  handleTradeSubmit() {
    Trade.myTrades().then(data => {
      this.setState({
        trades: data.trades,
        offers_made: data.offers_made,
        showModal: false
      })
    })
  }

  handleTradeClose() {
    this.setState({
      //filter array by selected id
    })
  }

  render() {
    return (
      <main>
        <div className="row" id="Trades-Offers">
          <div id="myTrades" className="card col mr-3 ml-3 p-3">
            <h2>My Trades <span className="float-right text-muted">{sessionStorage.getItem('slots')} slots</span></h2>
            <ul className="list-group list-group-flush">
            {this.state.trades.map(trade => (
              <li className="list-group-item" key={trade.id}>
                {trade.aasm_state === "open" ? (
                    <TradeWithOffers trade={trade} key={trade.id}/>
                  ) : (
                    <Link to={`/trades/${trade.id}`}>
                      <p>My {`${trade.produce}`} for {trade.offer_produce}</p>
                    </Link>
                  )
                }
                </li>
            ))}
            </ul>
            
            {(sessionStorage.getItem("slot_available") === "true") ? (
              <button
              onClick={this.handleOpenModal}
              className="btn btn-dark float-right m-2">
              Start a new Trade
              </button>
            ) : (
              <button
              disabled
              className="btn btn-dark float-right m-2">
              No slots available
              </button>
            )}

          </div>
          <br/>

          <div id="myOffers" className="card col mr-3 ml-3 p-3">
            <h2>Offers Made</h2>
            <ul className="list-group list-group-flush">
            {this.state.offers_made.map(offer => (
              <li className="list-group-item" key={offer.id}>
                  <p>{`My ${offer.produce} for ${offer.trade.user.name}'s ${offer.trade.produce}`}</p>
              </li>
            ))}
            </ul>
          </div>

        </div>

        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Make offer"
          ariaHideApp={false}
          style={{
            content:{top:"150px", bottom:"200px", left:"20%", right:"20%"},
            overlay:{backgroundColor: "rgba(31, 142, 31, 0.7"}
          }}
        >
          <NewTrade
            handleCancel={this.handleCloseModal}
            handleSubmit={this.handleTradeSubmit}
          />

        </ReactModal>
      </main>
    )
  }
}