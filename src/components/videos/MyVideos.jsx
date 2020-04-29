import React, { Component } from "react";
import { Player } from "video-react";
import Grid from "@material-ui/core/Grid";

export default class MyVideos extends Component {
  state = {
    videos: [
      "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
      "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
      "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
    ]
  };

  render() {
    return (
      <div>
        <Grid container spacing={5}>
          {this.state.videos.map(video => (
            <Grid item xs={3}>
              <Player src={video} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
