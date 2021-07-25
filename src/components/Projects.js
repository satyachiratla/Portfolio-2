import React from "react";
import "./Projects.css";
import FoodImage from "../assets/foodorder.png";
import PortfolioImage from "../assets/portfolio.png";
import PlacesImage from "../assets/places.png";

const Projects = () => {
  const openProfileHandler = () => {
    const newWindow = window.open("");
    if (newWindow) newWindow.opener = null;
  };

  const openFoodHandler = () => {
    const newWindow = window.open("https://peddadameals.netlify.app/");
    if (newWindow) newWindow.opener = null;
  };

  const openPlacesHandler = () => {
    const newWindow = window.open("https://vivekchowdary.herokuapp.com/");
    if (newWindow) newWindow.opener = null;
  };

  const openProSrcHandler = () => {
    const newWindow = window.open("");
    if (newWindow) newWindow.opener = null;
  };

  const openFoodSrcHandler = () => {
    const newWindow = window.open("https://github.com/satyachiratla/foodapp");
    if (newWindow) newWindow.opener = null;
  };

  const openPlacesSrcHandler = () => {
    const newWindow = window.open(
      "https://github.com/satyachiratla/places/tree/master"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div id="projects" className="projects">
      <div className="projects-heading">
        <h1> Projects </h1>
        <h2> That I've done! </h2>
      </div>
      <div className="projects-contents">
        <div className="projects-content">
          <img src={PortfolioImage} alt="portfolio" />
          <div className="info">
            <h1> My Portfolio </h1>
            <p>
              {" "}
              Completely made with React and its inbuilt features. There is no
              other Stack.{" "}
            </p>
            <div className="button-actions">
              <button onClick={openProfileHandler} className="button-demo">
                DEMO
              </button>
              <button onClick={openProSrcHandler} className="button-src">
                SOURCE
              </button>
            </div>
          </div>
        </div>
        <div className="projects-content">
          <img src={FoodImage} alt="food" />
          <div className="info">
            <h1> Food Order App </h1>
            <p>
              {" "}
              Build a Dynamic Single Page Application by managing the state with
              context API and fetching data, storing data from the backend
              (FireBase){" "}
            </p>
            <div className="button-actions">
              <button onClick={openFoodHandler} className="button-demo">
                DEMO
              </button>
              <button onClick={openFoodSrcHandler} className="button-src">
                SOURCE
              </button>
            </div>
          </div>
        </div>
        <div className="projects-content">
          <img src={PlacesImage} alt="place" />
          <div className="info">
            <h1> Saving Places App </h1>
            <p>
              {" "}
              Created a saving places app that you might be visit in
               the future, using MERN(MongoDB, Express, React, Node) deployed
                in Heroku and Netlify..{" "}
            </p>
            <div className="button-actions">
              <button onClick={openPlacesHandler} className="button-demo">
                DEMO
              </button>
              <button onClick={openPlacesSrcHandler} className="button-src">
                SOURCE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
