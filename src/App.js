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
    error: {
      status: false,
      message: null
    }
  };

  componentDidMount() {
    this.updateState("Vilnius");
  }

  updateState = term => {
    this.setState({ loading: true });
    getYoutubeVideos(term).then(res => {
      console.log(res);
      this.setState({
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
        {/* TODO: Maybe i need to rename onSearchSubmit to a updateState  */}
        <Box pt={6}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} md={7}>
                {this.state.videos.length !== 0 &&
                this.state.error.status === false ? (
                  <MainVideo currentVideo={this.state.currentVideo} />
                ) : (
                  <Message errorMessage={this.state.error.message} />
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
      </>
    );
  }
}

export default App;
