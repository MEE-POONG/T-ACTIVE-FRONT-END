import { Container, Row, Col } from 'react-bootstrap';
import { intro } from './../../data/test';
import { BsBook } from 'react-icons/bs';

const AboutSection = () => {
  const aboutIntro = intro.filter(item => item.pagelist === 'about');

  return (
    <section className="about-section section-padding" id="section_2">
      <Container>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">

              <h1 className="f-s-cookie mb-4">{aboutIntro[0].title}</h1>

              <p className="">
                {aboutIntro[0].srcipOne}
              </p>

              <h6 className=" mt-4">{aboutIntro[1]?.title}</h6>

              <p className="">
                {aboutIntro[1]?.srcipOne}
              </p>

              <h6 className=" mt-4">{aboutIntro[2]?.title}</h6>

              <p className="">{aboutIntro[2]?.srcipOne}</p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-text-wrap">
              <img src={"images/about/IMG_2425.JPG"} className="about-image img-fluid" />

              <div className="about-text-info d-flex">
                <div className="d-flex">
                  <i className="about-text-icon"><BsBook/></i>
                </div>

                <div className="ms-4">
                  <h3>Get to know Click</h3>

                  <p className="mb-0">Stevia and the brand leader</p>
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
