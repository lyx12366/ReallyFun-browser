// import Button from "@mui/material/Button";
import React from "react";
import { Outlet } from "react-router-dom";
import ClippedDrawer from "../components/Drawer";

class Home extends React.Component {
  render() {
    return (
      <>
        <ClippedDrawer />
        <h2>elimination</h2>
        <Outlet />
      </>
    );
  }
}

export default Home;
