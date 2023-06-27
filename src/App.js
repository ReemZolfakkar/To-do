import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Compnents/Navbar";
import Todolist from "./Compnents/To-dolist";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Weather from "./Compnents/weather";
function App() {
  const [mode, setMode] = useState(true);
  return (
    <div
      className="App"
      style={
        mode
          ? { background: "white", height: "100vh" }
          : { background: "black", height: "100vh" }
      }
    >
      <Navbar mode={mode} setMode={setMode}></Navbar>
      <Routes>
        <Route path="/" element={<Todolist mode={mode}></Todolist>}></Route>
        <Route path="/weather" element={<Weather></Weather>}></Route>
      </Routes>
    </div>
  );
}

export default App;
