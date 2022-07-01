import Button from "@mui/material/Button";
import React from "react";

class Home extends React.Component {
  render() {
    const subject = "ReallyFun";
    return <Button variant="outlined">你好，{subject}! </Button>;
  }
}

export default Home;
