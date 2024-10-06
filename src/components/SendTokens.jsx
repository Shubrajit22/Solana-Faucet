import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export default function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        try {
            const to = document.getElementById("to").value;
            const amount = document.getElementById("amt").value;
            console.log(amount)
            // Validate input
            if (!PublicKey.isOnCurve(to)) {
                throw new Error("Invalid recipient address");
            }
            if (amount <= 0) {
                throw new Error("Invalid amount");
            }

            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            }));

            const signature = await wallet.sendTransaction(transaction, connection);
            console.log("Transaction signature:", signature);

            // Wait for transaction confirmation (optional)
            await connection.confirmTransaction(signature);
            alert("Sent " + amount + " SOL to " + to);
        } catch (error) {
            console.error(error);
            alert("Error sending tokens: " + error.message);
        }
    }

    return <div>
        <input id="to" type="text" placeholder="To" />
        <input id="amt" type="text" placeholder="Amount" />
        <button onClick={sendTokens}>Send</button>
    </div>
}