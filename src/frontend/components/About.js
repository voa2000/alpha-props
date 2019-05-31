import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-body-text">
        <h1 className="teamheading">Meet the team</h1>
        <h3>Alpha Team is a team of developers who graduated from <a href="https://www.kodiri.com/portal" target="_blank" rel="noopener noreferrer">Kodiri</a> web development bootcamp in London 
          and created this website as a graduation project. The project represents a 
          prime property estate agency website that lists their inventory of available properties for the market.
          The website is built by React.js and uses MongoDb in the backend for data.
          The application repository is hosted on <a href="https://github.com/kodiri/alpha-props" target="_blank" rel="noopener noreferrer">GitHub.</a>
          </h3>
      </div>
      <div className="about-profile-images">
          <div>
          <a href="https://www.linkedin.com/in/florin-bunea-0a17a212a/" target="_blank" rel="noopener noreferrer">
            <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fprofile%2fflorin.jpg?alt=media`)} alt="florin"/></a>
            <h1>Florin</h1>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/buketkonuk/" target="_blank" rel="noopener noreferrer">
            <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fprofile%2fbuket.jpg?alt=media`)} alt="buket"/></a>
            <h1>Buket</h1>
          </div>
          <div>
            <a href="https://gawahchan.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
            <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fprofile%2fgawah.jpg?alt=media`)} alt="gawah"/></a>
            <h1>Gawah</h1>
          </div>
          <div>
            <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fprofile%2fvilius.jpg?alt=media`)} alt="vilius"/>
            <h1>Vilius</h1>
          </div>
          <div>
            <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fprofile%2fviv.jpg?alt=media`)} alt="viv"/>
            <h1>Viv</h1>
          </div>
        </div>
    </div>
  );
}

export default About;
