import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col className="mt-auto mb-5 text-center">
            <small>Festava Live Presents</small>
            <h1 className="text-white mb-5">Night Live 2023</h1>
            <Link className="btn custom-btn smoothscroll" href="#section_2">
              Let's begin
            </Link>
          </Col>

          <Col lg={12} className="mt-auto d-flex flex-column flex-lg-row text-center">
            <div className="date-wrap">
              <h5 className="text-white">
                <i className="custom-icon bi-clock me-2"></i>
                10 - 12<sup>th</sup>, Dec 2023
              </h5>
            </div>

            <div className="location-wrap mx-auto py-3 py-lg-0">
              <h5 className="text-white">
                <i className="custom-icon bi-geo-alt me-2"></i>
                National Center, United States
              </h5>
            </div>

            <div className="social-share">
              <ul className="social-icon d-flex align-items-center justify-content-center">
                <span className="text-white me-3">Share:</span>

                <li className="social-icon-item">
                  <Link href="#" className="social-icon-link">
                    <span className="bi-facebook"></span>
                  </Link>
                </li>

                <li className="social-icon-item">
                  <Link href="#" className="social-icon-link">
                    <span className="bi-twitter"></span>
                  </Link>
                </li>

                <li className="social-icon-item">
                  <Link href="#" className="social-icon-link">
                    <span className="bi-instagram"></span>
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