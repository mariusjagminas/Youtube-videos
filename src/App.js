import React from "react";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContainerNoPadding from "../src/components/ContainerNoPadding";
import MainVideo from "../src/components/MainVideo";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import VideosList from "./components/VideosList";
import { getYoutubeVideos } from "./utils/getYoutubeVideos";
import Message from "./components/Message";

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
        currentVideo: res.videos[0]
      });
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
    return (
      <>
        <CssBaseline />
        <NavBar
          onSearchSubmit={this.updateState}
          loading={this.state.loading}
        />
        <Box pt={7}>
          <ContainerNoPadding upTo={600}>
            <Grid container spacing={5}>
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
          </ContainerNoPadding>
        </Box>
      </>
    );
  }
}

export default App;
