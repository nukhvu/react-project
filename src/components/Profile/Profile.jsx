import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="content">
        <ProfileInfo/>
      <div>
          <div>
              <textarea placeholder="any text"></textarea>
          </div>
          <button>add new Message</button>
      </div>
      <div>
        <MyPosts  like='1'/>
      </div>
    </div>
  );
};

export default Profile;
