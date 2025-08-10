import { create } from "zustand";
import axios from "axios";
async function getCryptos () {
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'
    const data = await axios(url)
    console.log(data);

}

export const useCryptoStore = create (()=> ({
    fechCryptos: ()=>{
        getCryptos()
    }
}))