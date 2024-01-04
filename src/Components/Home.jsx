import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Sua pizza favorita entregue quente e fresca
          </h1>
          <p className="primary-text">
          Desfrute da sua pizza favorita entregue na sua porta, fresquinha e irresistivelmente saborosa! Peça agora e experimente o prazer de saborear uma deliciosa pizza, direto do forno para o seu paladar. 
          </p>
          <button className="secondary-button">
          Peça agora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
