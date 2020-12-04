import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { getWalletBalance, transfer } from '../api/blockchain';

export default class TransferPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receiver_address: '',
			transfer_amount: 0,
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
		let payload = {
			recipient: this.state.receiver_address,
			spender: this.state.wallet_address,
			amount: this.state.transfer_amount
		}
		let response = await transfer(payload)
		this._getWalletBalance()
		// not advisable to do this
		alert(response.message)
	}

	handleChange(e, key){
		let data = {}
		data[key] = e.target.value
		this.setState(data)
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
							Transfer To: 
							<input 
								type="text" 
								value={this.state.receiver_address}
								ref="receiver_address"
								onChange={(e) => this.handleChange(e, 'receiver_address')} 
							/>
						</p>
					</div>
					<div>
						<p>
							Transfer Amount: 
							<input
								type="text"
								value={this.state.transfer_amount} 
								ref="transfer_amount" 
								onChange={(e) => this.handleChange(e, 'transfer_amount')} 
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