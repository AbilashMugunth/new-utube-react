import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("react state");
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoselect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("from the App!", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar proponFormSubmit={this.onTermSubmit} />

        <div className="ui grid video-content">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                propvideos={this.state.videos}
                proponVideoSelect={this.onVideoselect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
