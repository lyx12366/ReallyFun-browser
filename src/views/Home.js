// import Button from "@mui/material/Button";
import React from "react";
import { Box } from "@mui/material";
import ActionAreaCard from "../components/ActionAreaCard";

class Home extends React.Component {
  render() {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ActionAreaCard introduction="2048小游戏" gamename="2048" />
        <ActionAreaCard introduction="植物大战僵尸" gamename="PVZ" />
      </Box>
    );
  }
}

export default Home;
