import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./Route/HelloWorld.jsx";
import Count from "./Route/Count.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/" element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
