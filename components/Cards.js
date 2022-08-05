import React from "react";
import Card from "./Card"; 

const cards = [
  {
    id: 1,
    title: "Excursiones",
    image: 'img/image2.jpg',
    url: "/",
    text: ''
  },
  {
    id: 2,
    title: "Viajes al Interior",
    image: 'img/image2.jpg',
    url: "/",
    text: ''
  },
  {
    id: 3,
    title: "Resorts",
    image: 'img/image2.jpg',
    url: "/",
    text: ''
  },
];

function Cards() {
  return (
    <div className="App"> 
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map(({ title, image, url, id, text }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} url={url} text={text}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;