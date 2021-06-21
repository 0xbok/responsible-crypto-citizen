import {useState} from "react";
import { ethers } from "ethers";

function ConnectWalletApp() {
  const [account, setAccount] = useState();

  window.ethereum.on('accountsChanged', (accounts) => {
    setAccount(accounts[0]);
  });

  // request access to the user's MetaMask account
  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Will open the MetaMask UI
        // You should disable this button while the request is pending!
        const newAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(newAccounts[0]);
        console.log(newAccounts);
      } catch (error) {
        console.error(error);
      }
    }
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [curBlockNumber, setCurBlockNumber] = useState();
  
  async function currentBlockNumber() {
    setCurBlockNumber(await provider.getBlockNumber());
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>Connect Wallet</button><br/>
        Connected account: {account}<br/><br/>
        <button onClick={currentBlockNumber}>Current Block Number</button><br/>
        Current Block Number: {curBlockNumber}<br/>
      </header>
    </div>
  );
}

export default ConnectWalletApp;
