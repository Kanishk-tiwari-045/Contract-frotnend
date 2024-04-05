// TitleSection.js
import React from 'react';
import styled from 'styled-components';
// import Navbar from 'react-bootstrap/Container'; 
import Navbar from 'react-bootstrap/Navbar'; 

const Container = styled.section`
  padding-bottom: 20px;
  max-height: 600px;
`;

const TitleSection = () => {
  return (
    <Container id="title" className="container-fluid px-0 gradient-background">
      <Navbar className="navbar navbar-expand-lg navbar-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" id="nochange">
            <img id="no-background" src="./free-word-wrap-2693473-2235235.jpeg" height="40" style={{ borderRadius: '50%', marginLeft: '10px' }} />
            <span className="fw-bold text-white" style={{ marginLeft: '8px', fontSize: '23px' }}>CodeWrap</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id="home" className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a id="about" className="nav-link" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a id="service" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Services
                </a>
                <ul className="dropdown-menu dark-dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Postcode" aria-label="Search" />
              <button id="check1bar" className="btn btn-outline-light" type="submit">Check</button>
            </form>
          </div>
        </div>
      </Navbar>
      <section className="container-fluid px-0 gradient-background" style={{ paddingBottom: '20px', maxHeight: '600px' }}>
        <div className="container col-lg-11 px-4 pt-5">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 mb-4 mb-md-0">
              <div className="d-flex justify-content-start justify-content-md-start">
                <img src="https://solide-dapp.vercel.app/images/hub.png" className="rounded-lg transition hover:scale-110" alt="icon" style={{ maxHeight: '500px', width: '900px' }} />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-lg-center text-sm-center text-md-center">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Meet up to your coding needs with llama AI.</h1>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-light btn-lg px-4 me-md-2">
                  <i className="fab fa-apple"></i> Download
                </button>
                <button type="button" className="btn btn-outline-dark btn-lg px-4">
                  <i className="fab fa-google-play"></i> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TitleSection;
