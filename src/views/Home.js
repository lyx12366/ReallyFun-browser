// import Button from "@mui/material/Button";
import React from "react";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import ActionAreaCard from "../components/ActionAreaCard";
import ClippedDrawer from "../components/Drawer";

class Home extends React.Component {
  render() {
    return (
      <>
        <ClippedDrawer />
        <Container component="main" maxWidth="md">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0, sm: 1, md: 2 }}
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ActionAreaCard gamename="2048" rating={4} introduction="2048小游戏" />
            <ActionAreaCard gamename="PVZ" rating={3.5} />
            <ActionAreaCard gamename="LOLM" rating={3.8} />
          </Stack>
        </Container>
      </>
    );
  }
}

export default Home;
