import React, { Component } from "react";
import Ad from "./Ad.js";
import Post from "./Post.js";
import "./Feed.css";

// const Feed = () => {
//   return (
//     <div className="Feed" data-testid="feed">
//       <h2>Feed</h2>
//       <Post />
//       <Post />
//       <Ad />
//       <Post />
//       <Ad />
//       <Post />
//     </div>
//   );
// };

class Feed extends Component{
  constructor(){
    super()
  }

  render(){
    return <div className="Feed" data-testid="feed">
    <h2>Feed</h2>
    <Post />
    <Post />
    <Ad />
    <Post />
    <Ad />
    <Post />
  </div>
  }
}

export default Feed;
