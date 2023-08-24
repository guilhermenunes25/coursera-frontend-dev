import {ChakraProvider} from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import {Header} from "./components/Header"
import './App.css';
import LandingSection from "./components/LandingSection";

function App() {
  return (
  <ChakraProvider>
    <AlertProvider>
      <main>
        <Header />
        <LandingSection/>
      </main>
    </AlertProvider>
  </ChakraProvider>
  );
}

export default App;
