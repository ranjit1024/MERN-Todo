import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Landing } from "./Components/Landing";
import { Signup } from "./Components/Signup";
import { SignIn } from "./Components/SingIn";


function App() {
  return (
    <div>
      
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}





export default App;
