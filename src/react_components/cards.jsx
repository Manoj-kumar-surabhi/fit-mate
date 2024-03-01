import React from "react";
import Image from "../images/image1.jpg";
import PropTypes from "prop-types";
import "../css_files/cards.css";

const cards_array = [
  {
    key: 0,
    image: Image,
    data: "Heres a step-by-step guide to help you begin your journey",
    title: "GETTING STARTED",
  },
  {
    key: 1,
    image: Image,
    data: "Ready to embark on your fitness journey? Find a program that inspires and motivates you",
    title: "BEGGINER PROGRAMS",
  },
  {
    key: 2,
    image: Image,
    data: "Increase muscle mass and overall body size through targeted exercise, nutrition, and lifestyle strategies",
    title: "MASS GAIN PROGRAMS",
  },
];

function Card(props) {
  const { image, title, data, key } = props;
  return (
    <div key={key} className="div2proto">
      <div
        className="div2image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

function Cards() {
  return <div className="div2real">{cards_array.map(Card)}</div>;
}

export default Cards;
