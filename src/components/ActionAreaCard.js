import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Reating2show from "./Rating2show";
import logo from "../static/images/logo.png";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={() => console.log("handleInfor")}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <CardMedia component="img" height="100" image={logo} alt="logo" />
          <CardContent>
            <Typography gutterBottom variant="button" component="div">
              {props.gamename}
            </Typography>
            <Typography variant="body4" color="text.secondary">
              {props.introduction}
            </Typography>
            <Reating2show value={props.rating} />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
