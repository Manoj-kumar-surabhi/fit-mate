import React from "react";
import Card from "../prototypes/card";

import image1 from "../images/image1.jpg";
import image2 from "../images/image1.jpg";
import image3 from "../images/image1.jpg";

const cards = [
  {
    id: 1,
    title: "GETTING STARTED",
    image: image1,
    url: "/",
  },
  {
    id: 2,
    title: "BEGGINER PROGRAMS",
    image: image2,
    url: "/",
  },
  {
    id: 3,
    title: "MASS GAIN PROGRAMS",
    image: image3,
    url: "/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
