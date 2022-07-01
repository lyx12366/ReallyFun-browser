import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      passwd: "",
    };
  }

  async handleLogin() {
    console.log("handleLogin", this.state.uid, this.state.passwd);
    this.props.onLogin(this.state.uid);
  }

  async handleRegister() {
    console.log("handleRegister", this.state.uid, this.state.passwd);
  }

  render() {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: 1, mt: 5 }}
      >
        <TextField
          id="outlined-basic"
          label="用户名"
          variant="outlined"
          value={this.state.uid}
          onChange={(ev) => this.setState({ uid: ev.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="密码"
          variant="outlined"
          type="password"
          value={this.state.passwd}
          onChange={(ev) => this.setState({ passwd: ev.target.value })}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => this.handleLogin()}>
            登录
          </Button>
          <Button variant="outlined" color="success" onClick={() => this.handleRegister()}>
            注册
          </Button>
        </Stack>
      </Stack>
    );
  }
}

export default Login;
