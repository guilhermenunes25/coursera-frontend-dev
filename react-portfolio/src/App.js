import {ChakraProvider} from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import {Header} from "./components/Header"
import './App.css';
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
  <ChakraProvider>
    <AlertProvider>
      <main>
        <Header />
        <LandingSection/>
        <ProjectsSection/>
      </main>
    </AlertProvider>
  </ChakraProvider>
  );
}

export default App;
