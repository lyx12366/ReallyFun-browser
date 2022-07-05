import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Reating2show from "./Rating2show";

export default class PageItem extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <Grid container sx={{ mt: 12 }}>
        {games.map((gamesObj) => (
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea onClick={() => console.log("handleInfor")}>
              <CardMedia component="img" height="200" image={gamesObj.thumb} alt="logo" />
              <CardContent>
                <Typography gutterBottom variant="button" component="div">
                  {gamesObj.title}
                </Typography>
                <Typography
                  variant="body4"
                  color="text.secondary"
                  sx={{ textOverflow: "ellipsis" }}
                >
                  {gamesObj.intro}
                </Typography>
                <Reating2show value={gamesObj.rating} />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    );
  }
}
