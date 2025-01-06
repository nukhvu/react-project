import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="data:image/png;base64,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" />
      </div>

      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCG0M0eab1DFHXpXGn0effPFqjc_wGAuKNQ&s" />
        <h2>Noha</h2>
        <p>im from ich</p>
      </div>

      <div>
        <p>Any text</p>
      </div>
    </div>
  );
};

export default Profile;