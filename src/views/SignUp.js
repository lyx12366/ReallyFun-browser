import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import History from "../components/History";

const theme = createTheme();

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      email: "",
      passwd: "",
    };
  }

  async handleRegister() {
    console.log("handleRegister", this.state.uid, this.state.email, this.state.passwd);
    History.replace({ pathname: "/signin", state: {} });
    History.go(0);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              注册
            </Typography>
            <Box component="form" noValidate onSubmit={this.handleRegister} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="用户名"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={this.state.uid}
                    onChange={(ev) => this.setState({ uid: ev.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="邮箱地址"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={(ev) => this.setState({ email: ev.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="密码"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.passwd}
                    onChange={(ev) => this.setState({ passwd: ev.target.value })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => this.handleRegister()}
              >
                注册
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    已有账号？点击登录
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

export default SignUp;
