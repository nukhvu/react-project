import React from "react";
import s from "./MyPost.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <h3>new post</h3>
        <p>{props.name}</p>
        <span>10 янв 10:14</span>
      </div>
      <div>{props.work}</div>
      <div>
        <img
          className={s.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCG0M0eab1DFHXpXGn0effPFqjc_wGAuKNQ&s"
        />
      </div>
    </div>
  );
};

export default Post;
