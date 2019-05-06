import React from "react";
import "./Header.css";
import HeaderImage from "../images/header.png";
//Photos
import photo1 from "./../images/carousel/building (1).jpg";
import photo2 from "./../images/carousel/building (2).jpg";
import photo3 from "./../images/carousel/building (3).jpg";
import photo4 from "./../images/carousel/building (4).jpg";
import photo5 from "./../images/carousel/building (5).jpg";
import photo6 from "./../images/carousel/building (6).jpg";

export function Header2() {
  return (
    <div className="container">
      <div className="card bg-dark text-white">
        <img className="card-img" src={HeaderImage} alt="Card" />
        <div className="card-img-overlay">
          <h5 className="card-title">APLHA PROPS</h5>
          <p className="card-text">
            Your first stop for a prime Central London Property
          </p>
          <p className="card-text">
            If you are looking for a lifetime property in central London, we are
            here to help
          </p>
          <button className="btn btn-primary">
            <span className="glyphicon glyphicon-earphone" /> Call us
          </button>
        </div>
      </div>
    </div>
  );
}

function CarouseItem({ photo, title, description }) {
  return (
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src={photo}
        alt="First slide"
        style={{ height: "90vh", objectFit: "cover" }}
      />
      <div class="carousel-caption d-none d-md-block">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
          <li data-target="#carouselExampleIndicators" data-slide-to="5" />
        </ol>
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src={photo1}
            alt="First slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>APLHA PROPS</h3>
            <p>Your first stop for a prime Central London Property</p>
            <p>
              If you are looking for a lifetime property in central London, we
              are here to help
            </p>
          </div>
        </div>
        <CarouseItem
          photo={photo2}
          title={"Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <CarouseItem
          photo={photo3}
          title={"Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <CarouseItem
          photo={photo4}
          title={"Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <CarouseItem
          photo={photo5}
          title={"Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <CarouseItem
          photo={photo6}
          title={"Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
