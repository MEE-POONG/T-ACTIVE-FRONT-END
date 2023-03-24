import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsClock, BsFacebook, BsGeoAlt, BsInstagram, BsTwitter } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col className="mt-auto mb-5 text-center">
            <h3 className='gold-active f-s-cookie'>T Active Stevia</h3>
            <h1 className="gold-active mb-5">Introducing Stevia</h1>
            <h1 className="gold-active mb-5">Natural Sweetener</h1>
            <Link className="gold smoothscroll " href="#section_2">
              Learn About.
            </Link>
          </Col>

          <Col lg={12} className="mt-auto d-flex flex-column flex-lg-row text-center">
            <div className="date-wrap">
              <h5 className="text-white">
                <i className="custom-icon me-2"><BsClock /></i>
                10 - 12<sup>th</sup>, Dec 2023
              </h5>
            </div>

            <div className="location-wrap mx-auto py-3 py-lg-0">
              <h5 className="text-white">
                <i className="custom-icon me-2"> <BsGeoAlt /></i>
                National Center, United States
              </h5>
            </div>

            <div className="social-share">
              <ul className="social-icon d-flex align-items-center justify-content-center">
                <span className="text-white me-3">Share:</span>

                <li className="social-icon-item">
                  <Link href="#" className="social-icon-link">
                    <BsFacebook />
                  </Link>
                </li>

                <li className="social-icon-item">
                  <Link href="#" className="social-icon-link">
                    <BsTwitter />
                  </Link>
                </li>

                <li className="social-icon-item">
                  <Link href="#" className="social-icon-link ">
                    <BsInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="video-wrap">
        <video autoPlay loop muted className="custom-video" poster="">
          <source src="video/pexels-2022395.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
