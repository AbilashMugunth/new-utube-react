import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoselect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("from the App!", video);
  };

  render() {
    return (
      <div>
        <SearchBar proponFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          propvideos={this.state.videos}
          proponVideoSelect={this.onVideoselect}
        />
      </div>
    );
  }
}

export default App;
