//Importing the Rainbowkit Stylesheet.
import "@rainbow-me/rainbowkit/styles.css";

//Importing Components for RainbowKit.
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

//Importing App Components.
import YourComponent from "./YourComponent.js";

const { chains, provider } = configureChains(
  [chain.polygon],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Web3 Tbilisi Bootcamp Starter Boilerplate Repo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={{
          appName: "Web3 Tbilisi Bootcamp Starter Boilerplate Repo"
        }}
        chains={chains}
      >
        <YourComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
