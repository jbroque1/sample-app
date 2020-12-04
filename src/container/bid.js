import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { getWalletBalance, postBid } from '../api/blockchain';

export default class BidPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bid_amount: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	/* 
		Part of React lifecycle 
		All the data that needs to be
		displayed upon loading should be call here
	*/
	componentDidMount() {
		this._getWalletBalance()
	}

	resetState(){
		this.setState({
			bid_amount: 0
		})
	}

	async _getWalletBalance(){
		// not advisable to do this
		let wallet_address = localStorage.getItem('wallet_address')


		let response = await getWalletBalance(wallet_address)
		this.setState({
			balance: response.balance,
			wallet_address: wallet_address
		})
	}

	async handleSubmit(){
		let response = await postBid(this.state.bid_amount)
		this._getWalletBalance()

		// not advisable to do this
		alert(response.message)
	}

	handleChange(e){
		this.setState({
			bid_amount: e.target.value
		})
	}

	render() {

		return (
			<div>
				{/* not advisable to do this block of code*/}
				<ul>
				  <li><Link to="/">Wallet</Link></li>
				  <li><Link to="/bid">Bid</Link></li>
				  <li><Link to="/transfer">Transfer</Link></li>
				</ul>
				<div className="bid-container">
					<div>
						<p>Wallet Balance: {this.state.balance}</p>
					</div>
					<div>
						<p>
							Place Bid: 
							<input 
								type="text" 
								value={this.state.bid_amount} 
								ref="bid_amount" 
								onChange={this.handleChange}
							/>
						</p>
					</div>
					<div>
						<button onClick={this.handleSubmit}>Submit</button>
					</div>
				</div>
			</div>
		);
	}
}