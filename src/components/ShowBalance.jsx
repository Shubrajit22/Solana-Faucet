import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'
import "../components/RequestAirDrop.css"
const ShowBalance = () => {
    const {connection} = useConnection();
    const wallet = useWallet();
    async function showMybalance(){
     const balance = await connection.getBalance(wallet.publicKey)/ LAMPORTS_PER_SOL;
     const el = document.getElementById("show");
     el.innerHTML=balance;
    
     
    }
  return (
    <div id="show_balance">
        <button id ="bal" onClick={showMybalance}>Show Balance</button>
        <div id="show"></div>
    </div>
  )
}

export default ShowBalance