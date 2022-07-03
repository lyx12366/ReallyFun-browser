import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import logo from "../static/images/logo.png";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardActionArea onClick={() => console.log("handleInfor")}>
        <CardMedia
          component="img"
          height="100"
          image={logo}
          // image="http://codesohigh.com/images/logo.png"
          alt="logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.gamename}
          </Typography>
          <Typography variant="body4" color="text.secondary">
            {props.introduction}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
