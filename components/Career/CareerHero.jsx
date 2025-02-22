import React from "react";

const carouselData = [
  {
    id: 1,
    image: "/slide/1.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
  {
    id: 2,
    image: "/slide/2.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
  {
    id: 3,
    image: "/slide/3.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
  {
    id: 4,
    image: "/slide/4.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
  {
    id: 5,
    image: "/slide/5.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
  {
    id: 6,
    image: "/slide/6.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
  {
    id: 7,
    image: "/slide/7.png",
    title: "Shape Your Career with CloudMinister",
    description: "Become part of a team that values innovation, development, and quality of creative minds. Uncovering the limitless prospects for curating a rewarding career as you effect positive change daily. Here is where your journey to success starts!",
    buttonText: "Join Us",
  },
];

const CareerPage = () => {
  return (
    <div>
      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-10"
        data-bs-ride="carousel"
        style={{ paddingTop: "112px" }}
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-href={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {carouselData?.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={item.image} className="d-block w-100" alt={item.title} style={{filter:"brightness(80%)", transition:" 0.3s ease-in-out"}} />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white">{item.title}</h1>
                <p className="text-white">{item.description}</p>
                <a className="btn btn-warning"   href="mailto:hr@cloudminister.com" >{item.buttonText}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CareerPage;
