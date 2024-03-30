import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '@rainbow-me/rainbowkit/styles.css';

import {ConnectButton,getDefaultConfig,RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [polygonMumbai],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();


       
       



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
    <App />
    </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);


