import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import "../components/RequestAirDrop.css"
export default function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
        
    }

    return <div id="air_drop">
       
        <input id="amount" type="text" placeholder="Amount" />
        <button id="button" onClick={requestAirdrop}>Request Airdrop</button>
    </div>
}