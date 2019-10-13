import React from "react";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainVideo from "../src/components/MainVideo";
import Grid from "@material-ui/core/Grid";
import { data } from "../src/teporaryData";

class App extends React.Component {
  state = {
    videos: data.items,
    currentVideo: data.items[2]
  };

  updateState = videos => {
    this.setState({ videos: videos });
  };

  render() {
    return (
      <>
        <CssBaseline />
        <NavBar updateState={this.updateState} />
        <Container>
          <Grid container>
            <Grid item xs={12} md={8}>
              <MainVideo currentVideo={this.state.currentVideo} />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
