import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Cookies from "universal-cookie";
import NavBar from "./components/NavBar";
import Login from "./views/Login";
import Home from "./views/Home";

const cookies = new Cookies();

function App() {
  console.log("APP!!!");

  const navigate = useNavigate();

  const initUid = cookies.get("uid");
  const [uid, setUid] = React.useState(initUid || null);

  const handleLogin = (newUid) => {
    setUid(newUid);
    cookies.set("uid", newUid);
  };

  const handleLogout = () => {
    setUid(null);
    cookies.remove("uid");
  };

  return (
    <Box sx={{ height: 1 }}>
      <NavBar navigate={navigate} uid={uid} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login navigate={navigate} onLogin={handleLogin} />} />
      </Routes>
    </Box>
  );
}

export default App;
