import React from "react";
import s from "./../MyPosts/MyPosts.module.css";
import Post from "./Post/MyPost";

const MyPosts = () => {
  return (
    <div className={s.item}>
      <Post work="My stack: Swift" name="noha" country="ich" />
      <Post work="My stack: TS, React" name="dur" country="ame" />
      <Post work="My stack: go,sql" name="musa" country="ru" />
    </div>
  );
};

export default MyPosts;
