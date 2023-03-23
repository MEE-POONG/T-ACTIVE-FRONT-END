import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section className="about-section section-padding" id="section_2">
      <Container>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h1 className="f-s-cookie mb-4">About Stevia</h1>

              <p className="">
                Festava Live is free CSS template provided by TemplateMo website. This layout is built on Bootstrap
                v5.2.2 CSS library. You are free to use this template for your commercial website.
              </p>

              <h6 className=" mt-4">Once in Lifetime Experience</h6>

              <p className="">
                You are not allowed to redistribute the template ZIP file on any other website without a permission.
              </p>

              <h6 className=" mt-4">Whole Night Party</h6>

              <p className="">Please tell your friends about our website. Thank you.</p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-text-wrap">
              <img src="images/pexels-alexander-suhorucov-6457579.jpg" className="about-image img-fluid" />

              <div className="about-text-info d-flex">
                <div className="d-flex">
                  <i className="about-text-icon bi-person"></i>
                </div>

                <div className="ms-4">
                  <h3>a happy moment</h3>

                  <p className="mb-0">your amazing festival experience with us</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
