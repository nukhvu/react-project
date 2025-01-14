import React from "react";
import s from "./../MyPosts/MyPosts.module.css";
import Post from "./Post/MyPost";

const MyPosts = (props) => {
      const posts = [
              { work:"My stack: Swift", country:"ich"},
              { work:"My stack: Go" ,country:"ich"},
              { work:"My stack: JS", country:"ich"},
              { work:"My stack: React", country:"ich"}
      ]

      let postsElements = posts.map(p => <Post work={p.work} country={p.country} />);

    return (
      <div className={s.item}>
        {postsElements}
      </div>
  )
};

export default MyPosts;
