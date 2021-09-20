import Web3 from 'web3';

//creating a web3 object using the MetaMask Provider.(this will only work if MetaMask is installed)
let web3;
export function getWeb3(){
    if (!web3){
        web3 = new Web3(Web3.givenProvider);
    }
    return web3;
}

//retrieving the user's current default account after using the web3 object (metamask provider) (page 25)
export async function getAccount(){
    const web3 = getWeb3();
    const accounts = await window.ethereum.enable();
    return accounts[0];
}