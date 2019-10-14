import React from "react";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainVideo from "../src/components/MainVideo";
import Grid from "@material-ui/core/Grid";
import { data } from "../src/teporaryData";
import Box from "@material-ui/core/Box";
import VideosList from "./components/VideosList";
import { getYoutubeVideos } from "./utils/getYoutubeVideos";

class App extends React.Component {
  state = {
    videos: data.items,
    currentVideo: data.items[4]
  };

  updateState = term => {
    getYoutubeVideos(term).then(videos =>
      this.setState({ videos: videos, currentVideo: videos[1] })
    );
  };

  render() {
    return (
      <>
        <CssBaseline />
        <NavBar onSearchSubmit={this.updateState} />
        <Box pt={6}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} md={7}>
                <MainVideo currentVideo={this.state.currentVideo} />
              </Grid>
              <Grid item xs={12} md={5}>
                <VideosList videos={this.state.videos} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}

export default App;
