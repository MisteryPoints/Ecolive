import React from "react";
import Card from "./Card"; 

const cards = [
  {
    id: 1,
    title: "Excursiones",
    image: '/img/card1.jpg',
    url: "/",
    text: 'Nuestras excursiones incluyen transporte, hospedaje, los alimentos y/o visitas de ciudad. Tratamos de que tus vacaciones sean inolvidables.'
  },
  {
    id: 2,
    title: "Viajes al Interior",
    image: '/img/card2.jpg',
    url: "/",
    text: 'Para estos nosotros ofrecemos paquetes turísticos por separado, tales como: venta de noches de hotel, renta de autos, tours o excursiones.'
  },
  {
    id: 3,
    title: "Resorts",
    image: '/img/card3.jpg',
    url: "/",
    text: 'Ofertamos las mejores tarifas del mercado para que viajes al hotel de tu preferencia con las mejores facilidades.'
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