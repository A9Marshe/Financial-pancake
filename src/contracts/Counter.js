import { getWeb3, getAccount } from '../eth/network';
import Artifacts from './Artifacts.json'
//Function to create a Counter web3 contract object
//This function DOES NOT create a new smart contract, it only creates a javascript object that acts as a wrapper to a contract perviously deployed at an address

export default function Counter(web3, address, options ={}){
    const name = "Contracts/Counter.sol:Counter";
    const artifacts = Artifacts.contracts[name];
    const abi = JSON.parse(artifacts.abi);
    return new web3.eth.Contract(abi, address, options)
}

//code for obtaining a web3 contract instance of the Counter contract deployed on the Rinkeby network, the address should be stored and then retrieved from process.env but meh not now

export async function getDeployed(){
    const web3 = getWeb3();
    const from = await getAccount();
    const addr = "0x1D2561D18dD2fc204CcC8831026d28375065ed53";
    return Counter(web3, addr, {from});
}