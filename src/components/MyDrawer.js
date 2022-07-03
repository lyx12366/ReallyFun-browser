import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ExtensionIcon from "@mui/icons-material/Extension";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import CasinoIcon from "@mui/icons-material/Casino";
import { BrowserRouter, Link, Router } from "react-router-dom";
import { Menu } from "@mui/material";

const drawerWidth = 200;

function handlegame() {
  console.log("11111");
}

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <NavBar /> */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {/* <List>
            {["全部游戏",
              "益智游戏",
              "动作游戏",
              "射击游戏",
              "消除游戏",
              "休闲游戏",
              "棋牌游戏",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                    <ExtensionIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
          <List>
            <ListItem>
              <Link className="list-group-item" to="/" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全部游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link className="list-group-item" to="/puzzle" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <ExtensionIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;益智游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link className="list-group-item" to="/action" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <AccessibleForwardIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动作游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link className="list-group-item" to="/shoot" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <CatchingPokemonIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;射击游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                className="list-group-item"
                to="/elimination"
                style={{ textDecoration: "none" }}
              >
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <ChildCareIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消除游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link className="list-group-item" to="/casual" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <SportsTennisIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;休闲游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link className="list-group-item" to="/chess" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={() => handlegame()}>
                  <ListItemIcon>
                    <CasinoIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;棋牌游戏
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
