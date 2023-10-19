import "./App.css";
import AddEmp from "./components/AddEmp";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditEmp from "./components/EditEmp";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addEmp" element={<AddEmp />}></Route>
        <Route path="/editEmp/:id" element={<EditEmp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
