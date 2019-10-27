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
import Message from "./components/Message";

class App extends React.Component {
  state = {
    videos: [],
    currentVideo: data.items[0],
    loading: false,
    showMessage: false,
    error: null
  };

  componentDidMount() {
    this.updateState("Vilnius");
  }

  updateState = term => {
    this.setState({ loading: true, showMessage: false });
    getYoutubeVideos(term).then(res => {
      this.setState({
        showMessage: true,
        loading: false,
        videos: res.videos,
        currentVideo: res.videos[0],
        error: res.error
      });
    });
  };

  changeMainVideo = index => {
    this.setState(state => ({
      ...this.state,
      currentVideo: state.videos[index]
    }));
  };

  render() {
    return (
      <>
        <CssBaseline />
        <NavBar
          onSearchSubmit={this.updateState}
          loading={this.state.loading}
        />
        <Box pt={6}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} md={7}>
                {this.state.videos.length !== 0 ? (
                  <MainVideo currentVideo={this.state.currentVideo} />
                ) : this.state.showMessage ? (
                  <Message errorMessage={this.state.error} />
                ) : null}
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
      </>
    );
  }
}

export default App;
