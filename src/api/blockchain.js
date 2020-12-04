import axios from 'axios';
const server = 'http://nexus-dev.ubx.ph:8080/api'
/*
    Retrieve configuration data
*/
export async function getWalletBalance(address){
    const response = await axios.get(`${server}/wallet/balances/${address}`)
    const { status, data } = response;

    if( status !== 200 ){
        throw response;
    }

    return data;
}

export async function postBid(amount){
    const response = await axios.post(`${server}/auction/bid`, amount)

    const { status, data } = response;

    if( status !== 200 ){
        throw response;
    }

    return data;
}


export async function transfer(payload){
    const response = await axios.post(`${server}/wallet/transfer`, payload)

    const { status, data } = response;

    if( status !== 200 ){
        throw response;
    }

    return data;
}
