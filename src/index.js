import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './polyfills';
import App from "./App";

//Importing Theme Extensions for Chakra UI
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

//Importing Fonts for our app.
import '@fontsource/bangers/400.css';
import '@fontsource/league-spartan/300.css'
import '@fontsource/league-spartan/400.css'
import '@fontsource/league-spartan/800.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Theme extensions for Chakra UI and Fonts.
const theme = extendTheme({
  fonts: {
    heading: `'League Spartan', sans-serif`
  },
})

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
