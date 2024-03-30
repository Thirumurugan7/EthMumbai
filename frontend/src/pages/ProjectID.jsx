import React, { useEffect, useState } from "react";
import Onesign from "../assets/onesign.png";
import Navbar from "../components/Navbar";
import ExternalLink from "../components/External";
import { useAccount,useConnect } from 'wagmi';

import { Register , CreateProjectId } from "../BlockchainIntegration";

const ProjectID = () => {
  const [host, setHost] = useState({
    ProjectID: ""
  });
  const account = useAccount();
  const [authDone, setAuthDone] = useState(false);
  const { connect, connectors } = useConnect();
  const [currentAccount, setCurrentAccount] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setHost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(account);
    if(account.status === 'connected') { // Checking if the account is connected
      setAuthDone(true);
    } else {
      // Set authDone to true after 30 seconds
      const timer = setTimeout(() => {
        setAuthDone(true);
      }, 30000);
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [account]);


  const connectWalletHandler = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setCurrentAccount(accounts[0]);
      } else {
        alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
      }
    } catch (error) {
      console.error('Failed to connect the wallet:', error);
    }
  };

  const handleCreate = async () => {
    console.log("here");
    console.log(host.ProjectID);
    console.log(account.isConnected)


    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);

          console.log(account.address)

          if(account.address){
            connectWalletHandler()

          }

          const res = await Register({name:host.ProjectID , useradd:account.address})

          console.log("Res",res)

          const res2 = await CreateProjectId({address:account.address, name:host.ProjectID});

       
        } else {
          console.log('No accounts found');
          connectWalletHandler()
        }
      } else {
        alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
    

  }


  useEffect(() => {
    connectWalletHandler();

    // Listen for account changes
    window.ethereum?.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount(null);
      }
    });

    // Clean up event listener
    return () => {
      window.ethereum?.removeListener('accountsChanged', setCurrentAccount);
    };
  }, []);


  return (
    <div className="gradient-container h-screen grotesk-font">
      <Navbar />
      {!authDone ? (<ExternalLink />) : (
        <>   
          <div className="mx-6 pt-[8%] items-center">
            <div className="">
              <p className="text-6xl text-center text-white font-semibold">Create your Project ID</p>
            </div>
            <div className="flex justify-center mt-10">
              <div className="border-2 gradient-border w-[50%] p-6">
                <h1 className="text-white text-xl">
                  OneSign ID
                  <input
                    type="text"
                    className="block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-emerald-400 focus:outline-none focus:ring-0 peer placeholder-gray-400"
                    placeholder="Enter your OneSignID"
                    required
                    name="ProjectID"
                    value={host.ProjectID}
                    onChange={handleChange}
                  />
                </h1>
                <div className="flex justify-center items-center hover:scale-95 ease-in-out duration-150 pt-6" onClick={handleCreate}>
               
                    Create Now 🡥
            
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-0 absolute animate-pulse">
            <img src={Onesign} alt="OneSign" />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectID;
