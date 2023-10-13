import { useState } from "react";
import { DisplayBox } from "./components/DisplayBox";
import { MenuList } from "./components/MenuList";
import './global.css';

function App() {
  const [diffLevel, setDiffLevel] = useState("")

  return (
    <div className="container">
        <MenuList diffLevel={diffLevel} setDiffLevel={setDiffLevel} />
        <DisplayBox diffLevel={diffLevel} />
    </div>
  );
}

export default App;
