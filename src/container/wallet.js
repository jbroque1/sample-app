import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { getWalletBalance } from '../api/blockchain';

export default class WalletPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: 0,
			wallet_address: ''
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		this.setState({
			wallet_address: e.target.value
		})
	}

	async handleSubmit(){
		let response = await getWalletBalance(this.state.wallet_address)
		this.setState({
			balance: response.balance
		})
		// not advisable to do this
		localStorage.setItem('wallet_address', this.state.wallet_address)
		alert(response.message)
	}

	render() {
		return (
			<div>
				{/* not advisable to do this block of code */}
				<ul>
				  <li><Link to="/">Wallet</Link></li>
				  <li><Link to="/bid">Bid</Link></li>
				  <li><Link to="/transfer">Transfer</Link></li>
				</ul>
				{/* not advisable to do this block of code ends here*/}
				<div className="wallet-container">
					<div>
						<p>
							Wallet Address: 
							<input 
								type="text"
								value={this.state.wallet_address}
								ref="wallet_address"
								onChange={this.handleChange}
							/>
						</p>
					</div>
					<div>
						<button onClick={this.handleSubmit}>Submit</button>
					</div>
					<div>
						<p>Wallet Balance: {this.state.balance}</p>
					</div>
				</div>
			</div>
		);
	}
}