import React, { useState } from 'react';
import { ethers } from 'ethers';
import { CreateProjectId } from '../inegration';

const SignMessageComponent = () => {
  const [signedMessage, setSignedMessage] = useState('');
  const [message, setMessage] = useState('Hello, Enter Your OneSign ID');

  const handleSignMessage = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      setSignedMessage(signature);

    const recoveredAddress = await ethers.utils.verifyMessage(message, signature);
    console.log(`Recovered address: ${recoveredAddress}`);

    const res = await CreateProjectId({address:recoveredAddress, name:message});
    console.log(res);
    } catch (error) {
      console.error('Error signing message:', error);
      alert('Error signing message. Check the console for more details.');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={message}
        onChange={handleMessageChange}
      />
      <br />
      <button onClick={handleSignMessage}>Sign Message</button>
      {signedMessage && (
        <div>
          <h3>Signed Message</h3>
          <p>{signedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SignMessageComponent;
