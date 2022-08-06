import React from 'react' 

const ImageShowcase = () => {
  return (
    <section className="showcase">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(img/hd1.webp)` }}></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>Rio Partido</h2>
                    <p className="lead mb-0">Rio Partido es un lugar mágico e increíble bien escondido en la provincia de Hermanas Mirabal en el norte de la República Dominicana.</p>
                    <p className="lead mb-0">La cascada es un lugar que ningún turista querría perderse!</p>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url(img/hd2.jpg)'}}></div>
                <div className="col-lg-6 my-auto showcase-text">
                    <h2>Bahía de las Aguilas</h2>
                    <p className="lead mb-0">Con sus aguas cristalinas de color turquesa y sin hoteles, tiendas o restaurantes, esta playa de ocho kilómetros de color blanco diamante es reconocida como la más hermosa de República Dominicana. Protegida como parte del Parque Nacional Jaragua, Bahía de Las Águilas está rodeada de un impresionante paisaje kárstico.</p>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url(img/hd3.jpg)'}}></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>Las Dunas de Baní</h2>
                    <p className="lead mb-0 mt-4 ">Arenas de estas dunas son finas y bien seleccionadas, ricas en cuarzo y feldespatos, cuya alimentación procede de los sedimentos arrastrados desde el arroyo Bahía.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ImageShowcase