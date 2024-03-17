import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

export const AppContext = createContext();

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const appData = {
    wantToCook,
    setWantToCook,
    currentlyCooking,
    setCurrentlyCooking,
  };
  return (
    <AppContext.Provider value={appData}>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <Header />
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
