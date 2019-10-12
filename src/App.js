import React from "react";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    videos: null
  };

  updateState = videos => {
    this.setState({ videos: videos });
  };

  render() {
    console.log(this.state);
    return <NavBar updateState={this.updateState} />;
  }
}

export default App;
