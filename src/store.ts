import { create } from "zustand";

export const useCryptoStore = create (()=> ({
    fechCryptos: ()=>{
        console.log('From FechCryptos');
    }
}))