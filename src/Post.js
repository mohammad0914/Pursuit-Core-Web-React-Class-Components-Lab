import React from "react";
import "./Post.css";

const postInfo = {
  title: "Sample Post Title",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "This is the description of the post",
};

const Post = () => {
  return (
    <div className="Post" data-testid="post">
      <p>{postInfo.title}</p>
      <img src={postInfo.imageLink} alt="post" />
      <p>{postInfo.description}</p>
    </div>
  );
};

export default Post;
