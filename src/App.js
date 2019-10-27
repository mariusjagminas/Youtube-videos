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
    currentVideo: data.items[0],
    error: {
      status: false,
      message: null
    }
  };

  updateState = term => {
    getYoutubeVideos(term).then(res => {
      console.log(res);
      this.setState({
        videos: res.videos,
        currentVideo: res.videos[0],
        error: res.error
      });
    });
  };

  changeMainVideo = term => {
    this.updateState(term);
  };

  render() {
    return (
      <>
        <CssBaseline />
        <NavBar onSearchSubmit={this.updateState} />
        {/* TODO: Maybe i need to rename onSearchSubmit to a updateState  */}

        {this.state.error.status === false ? (
          <Box pt={6}>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12} md={7}>
                  {this.state.videos.length !== 0 ? (
                    <MainVideo currentVideo={this.state.currentVideo} />
                  ) : (
                    <div>No video if found for this request</div>
                  )}
                </Grid>
                <Grid item xs={12} md={5}>
                  <VideosList
                    videos={this.state.videos}
                    changeMainVideo={this.changeMainVideo}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        ) : (
          <div>errror{this.state.error.message}</div>
        )}
      </>
    );
  }
}

export default App;
