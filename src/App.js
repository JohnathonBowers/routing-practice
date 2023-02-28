import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import NumberWord from "./components/NumberWord";
import StyledInput from "./components/StyledInput";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:numberWord" element={<NumberWord />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
