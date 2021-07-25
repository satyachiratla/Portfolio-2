import React from "react";
import "./Profile.css";
import profile from "../assets/vivek.jpg";

const Profile = () => {
  const name = "Satya Chiratla 😜";

  return (
    <div id="about" className="profile">
      <img src={profile} alt="profile" />
      <h1>
        {" "}
        Hey Stalker 👋🏻, <br /> I'm <span className='other-color'>{name}</span>{" "}
      </h1>
    </div>
  );
};

export default Profile;
