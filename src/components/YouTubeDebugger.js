// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  // handleClick = (event) => {
  //   if (event.target.className === "bitrate") {
  //     this.setState({
  //       settings: {
  //         bitrate: 12,
  //         video: {
  //           resolution: this.state.settings.video.resolution
  //         }
  //       }
  //     })
  //   } else if (event.target.className === "resolution") {
  //     this.setState({
  //       settings: {
  //         bitrate: this.state.settings.bitrate,
  //         video: {
  //           resolution: '720p'
  //         }
  //       }
  //     })
  //   }
  // }

  handleBitClick = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: this.state.settings.video.resolution
        }
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitClick}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResClick}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }

}
