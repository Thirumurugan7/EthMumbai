import Web3 from "web3";

import abi from "./abi.json";

import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const contractAddress = "0x5f59b9A05B0C8086410dF1260CD9C073b5c21298";

export const Register = async ({name,useradd}) => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  const tx =await contract.register(name,useradd);
  await tx.wait();
  return tx;
};
export const CreateProjectId = async ({address,name}) => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  const tx = await contract.createProjectId(address,name);
  await tx.wait();
  return tx;
};

export const getCounter = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  return await contract.getCounter();
};