import Fragment from "react";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 50,
      margin: 50,
    },
    body: {
      fontSize: 101,
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const LandingPage = () => (
  <ThemeProvider theme={theme}>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <Container maxWidth="lg" align="center" className="mainpage">
      <Typography variant="h1" align="center">
        Welcome to the store!
      </Typography>

      <Typography>
        I built this store app to learn more about full stack development.
      </Typography>
      <Typography>For the back-end, I used Express and PostgresSQL.</Typography>
      <Typography>For front-end, I used React and Material-UI.</Typography>
      <Typography>Here's the source code: </Typography>
      <Link component="button" variant="body2" endIcon={<GitHubIcon />}>
        <Button endIcon={<GitHubIcon />} size="large">
          <a
            href="https://github.com/jackgeee/ShopPOS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </Button>
      </Link>
      <Typography>Here's a picture of a cat!</Typography>

      <Container>
        <img
          src="https://i.imgur.com/fVV1hl0.jpg"
          maxWidth="100%"
          height="auto"
        ></img>
      </Container>
    </Container>
  </ThemeProvider>
);

export default LandingPage;
