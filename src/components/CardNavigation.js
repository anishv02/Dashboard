import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/CardNavigation.css";

const CardNavigation = ({ logoSrc, header, text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div
      className="clickable-box"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {logoSrc && (
        <div className="image-container">
          <img src={logoSrc} alt={`${header} logo`} className="box-logo" />
        </div>
      )}
      <div className="text-container">
        <h3 className="box-header">{header}</h3>
        <p className="box-text">{text}</p>
      </div>
    </div>
  );
};

CardNavigation.propTypes = {
  logoSrc: PropTypes.string,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardNavigation;
