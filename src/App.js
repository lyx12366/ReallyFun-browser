import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Cookies from "universal-cookie";
import NavBar from "./components/NavBar";
// import Login from "./views/Login";
import Home from "./views/Home";
import Latest from "./views/Latest";
import Recommend from "./views/Recommend";
import Profile from "./views/Profile";
import Collection from "./views/Collection";
import Upload from "./views/Upload";
import Elimination from "./views/Elimination";
import Action from "./views/Action";
import Puzzle from "./views/Puzzle";
import Shoot from "./views/Shoot";
import Chess from "./views/Chess";
import Casual from "./views/Casual";

// import ClippedDrawer from "../components/Drawer";

const cookies = new Cookies();

function App() {
  // console.log("APP!!!");

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
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/upload" element={<Upload />} />
<<<<<<< refs/remotes/XJTU-ReallyFun/main
        {/* <Route path="/login" element={<Login navigate={navigate} onLogin={handleLogin} />} /> */}
        <Route path="/login" element={<LogIn navigate={navigate} onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
=======
        <Route path="/login" element={<Login navigate={navigate} onLogin={handleLogin} />} />
>>>>>>> 游戏分类侧边栏导航
        <Route path="/elimination" element={<Elimination />} />
        <Route path="/casual" element={<Casual />} />
        <Route path="/action" element={<Action />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/shoot" element={<Shoot />} />
      </Routes>
    </Box>
  );
}

export default App;
