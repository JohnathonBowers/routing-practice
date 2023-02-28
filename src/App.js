import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import NumberWord from "./components/NumberWord";
import StyledNumberWord from "./components/StyledNumberWord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:numberWord" element={<NumberWord />} />
        <Route path="/:numberWord/:textColor/:backgroundColor" element={<StyledNumberWord/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
