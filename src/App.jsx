import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirDrop from "./components/RequestAirDrop";

function App() {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <h1>SOLANA FAUCET</h1>
      </div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                alignItems: "column",
              }}
            >
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <div
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <RequestAirDrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
