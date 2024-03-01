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
    <div key={key} className="cardsproto">
      <div className="cardsdiv">
        <img src={image} alt="error" className="image" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{data}</p>
      </div>
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
  return <div className="cards">{cards_array.map(Card)}</div>;
}

export default Cards;