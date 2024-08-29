import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AddRobotPage } from "./pages/AddRobotPage";
function App() {
  return (
    <div className="App">
      <h1>ROBOTS</h1>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/new-robot" element={<AddRobotPage />}/>
      </Routes>
    </div>
  );
}

export default App;
