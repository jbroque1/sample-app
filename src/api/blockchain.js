import axios from 'axios';
/*
    Retrieve configuration data
*/
export async function getWalletBalance(address){
    const response = await axios.get(`wallet/balances/${address}`)
    const { status, data } = response;

    if( status !== 200 ){
        throw response;
    }

    return data;
}

export async function postBid(amount){
	console.log('API', amount)
    const response = await axios.post(`auction/bid`, amount)

    const { status, data } = response;

    if( status !== 200 ){
        throw response;
    }

    return data;
    // return {
	//   "message": "Successfully submitted a bid."
	// }
}


export async function transfer(payload){
	console.log('API', payload)
    const response = await axios.get(`wallet/transfer`, payload)

    const { status, data } = response;

    if( status !== 200 ){
        throw response;
    }

    return data;
 //    return {
	//   "message": "Successfully transferred funds."
	// }
}
