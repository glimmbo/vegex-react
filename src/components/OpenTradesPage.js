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

    this.handleSort = this.handleSort.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getSearchedTrades = this.getSearchedTrades.bind(this);
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

  getSearchedTrades(event) {
    console.log('start getSearchedTrades()')
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    console.log(formData.get('term'))
    Trade.search({
      search: formData.get('term')
    }).then(data => {
      this.setState({
        trades: data.trades
      })
    })
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

  handleSort(event) {
    console.log(event.target.id)
    // if (event.target.id === 'produce' || event.target.id === 'trade') {
    //   this.setState({
    //     trades: this.state.trades.sort()
    //   })
    // } else {
    //   this.setState({
    //     trades: this.state.trades.sort((a, b) => a - b)
    //   })
    // }
  }

  render() {
    return (
      <main>

        <form onSubmit={this.getSearchedTrades} className="input-group">
          <input className="form-control" type="text" name="term" placeholder="What are you looking for?"/>
          <span>
          <input type="submit" name={null} className="btn btn-dark input-group-btn ml-2" value="Search"/>
          </span>
        </form>
        <br/>

        <table className="table table-sm table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th onClick={this.handleSort} id="produce" name="produce" scope="col" style={{width: "50%"}}>Produce</th>
              <th onClick={this.handleSort} id="distance" name="distance" scope="col" style={{width: "10%"}}>Distance</th>
              <th onClick={this.handleSort} id="trader" name="trader" scope="col" style={{width: "25%"}}>Trader</th>
              <th onClick={this.handleSort} id="rate" name="rate" scope="col" style={{width: "15%"}}>Completion Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trades.map((trade, index) => (
              <OpenTrade trade={trade} handleRowClick={() => this.handleOpenModal(trade.id, index)} key={trade.id}/> 
            ))}
          </tbody>
        </table>

        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Make offer"
          ariaHideApp={false}
          style={{
            content:{top:"150px", bottom:"200px", left:"20%", right:"20%"},
            overlay:{backgroundColor: "rgba(31, 142, 31, 0.7"}
          }}
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