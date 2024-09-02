import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ maxHeight: "550px", overflow: "hidden" }}
      >
        <div className="carousel-inner" style={{ height: "550px" }}>
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active" style={{ height: "550px" }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/023/604/non_2x/front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg"
              className="d-block w-100"
              style={{ height: "100%", objectFit: "contain", filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ height: "550px" }}>
            <img
              src="https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2024/1/3/paneer-tikka.jpg"
              className="d-block w-100"
              style={{ height: "100%", objectFit: "contain", filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ height: "550px" }}>
            <img
              src="https://assets-jpcust.jwpsrv.com/thumbnails/52bj44jx-720.jpg"
              className="d-block w-100"
              style={{ height: "100%", objectFit: "contain", filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
