// import Button from "@mui/material/Button";
import React from "react";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
// import ActionAreaCard from "../components/ActionAreaCard";
import ClippedDrawer from "../components/Drawer";
import PageItem from "../components/PageItem";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  handleSaveGames(value) {
    this.setState({ games: value });
  }

  render() {
    const { games } = this.state;
    return (
      <Container component="main" maxWidth="md">
        <ClippedDrawer onSaveGames={(value) => this.handleSaveGames(value)} />
        <PageItem games={games} />
      </Container>
    );
  }
}
