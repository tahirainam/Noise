
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Sketch from "./pfive/sketch.jsx";
import AnotherArt from "./pfive/anotherArt.jsx";
import "./index.css";

function App() {
  const [activeArt, setActiveArt] = useState('Sketch');
  const showArt = () => {
    if (activeArt === "Sketch") {
      return <Sketch />;
    }
    if (activeArt === "AnotherArt") {
      return <AnotherArt />;
    }
  }
  return (
    <>
      <Navbar />
      <div className="flex mt-1" >
        
        <main className="flex-4 text-black px-4 py-2 flex items-center justify-center">
          {showArt()}
        </main>
        <Sidebar activeArt={activeArt} onSelect={setActiveArt} />
      </div>
    </>
  )
}

export default App
