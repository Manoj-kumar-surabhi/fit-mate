import React from "react";
import Getting_started from "../images/getting_started.png";
import Begginer_programs from "../images/begginer_programs.png";
import Mass_gain_program from "../images/mass_gaining_program.png";
import PropTypes from "prop-types";
import "../css_files/cards.css";

const cards_array = [
  {
    key: 0,
    image: Getting_started,
    data: "Heres a step-by-step guide to help you begin your journey",
    title: "GETTING STARTED",
  },
  {
    key: 1,
    image: Begginer_programs,
    data: "Ready to embark on your fitness journey? Find a program that inspires and motivates you",
    title: "BEGGINER PROGRAMS",
  },
  {
    key: 2,
    image: Mass_gain_program,
    data: "Increase muscle mass and overall body size through targeted exercise, nutrition, and lifestyle strategies",
    title: "MASS GAIN PROGRAMS",
  },
];

function Card(props) {
  const { image, title, data, key } = props;
  return (
    <div key={key} className="cardsproto">
      <div className="cardsdiv">
        <figure>
          <img src={image} alt="error" className="image" />
        </figure>
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
