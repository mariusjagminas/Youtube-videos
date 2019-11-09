import React from "react";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainVideo from "../src/components/MainVideo/MainVideo";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import VideosList from "./components/VideosList";
import { getYoutubeVideos } from "./utils/getYoutubeVideos";
import Message from "./components/Message/Message";

class App extends React.Component {
  state = {
    videos: [],
    loading: true,
    message: null
  };

  componentDidMount() {
    this.updateState("JavaScript");
  }

  updateState = term => {
    this.setState({ loading: true, message: null });
    getYoutubeVideos(term).then(res => {
      this.setState({
        loading: false,
        message: res.errorMessage,
        videos: res.videos,
        currentVideo: res.videos[0],
        deviceWidth: window.innerWidth
      });
      this.scrollToTop();
    });
  };

  changeMainVideo = index => {
    this.setState(
      state => ({
        ...this.state,
        currentVideo: state.videos[index]
      }),
      this.scrollToTop()
    );
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const isMobile = this.state.deviceWidth < 500;
    return (
      <>
        <CssBaseline />
        <NavBar
          onSearchSubmit={this.updateState}
          loading={this.state.loading}
        />
        <Box pt={isMobile ? 9 : 5}>
          <Container style={{ padding: isMobile ? "0" : "16px" }}>
            <Grid container spacing={isMobile ? 0 : 5}>
              <Grid item xs={12} md={7}>
                {this.state.videos.length !== 0 ? (
                  <MainVideo currentVideo={this.state.currentVideo} />
                ) : (
                  <Message message={this.state.message} />
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
