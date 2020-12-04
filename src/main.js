import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import WalletPage from './container/wallet';
import BidPage from './container/bid';
import TransferPage from './container/transfer';


export default class Main extends Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={WalletPage} />
                    <Route exact path="/bid" component={BidPage} />
                    <Route exact path="/transfer" component={TransferPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}