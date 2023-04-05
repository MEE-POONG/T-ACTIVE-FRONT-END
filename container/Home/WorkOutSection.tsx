import { Container, Row, Col } from 'react-bootstrap';

const WorkOutSection = () => {
  return (
    <section className="artists-section section-padding" id="section_3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="f-s-cookie mb-4">Work Out</h1>
          </Col>
          <Col lg={5} xs={12}>
            <div className="artists-thumb">
              <div className="artists-image-wrap">
                <img src="images/gallery/4.jpg" className="artists-image img-fluid" />
              </div>
              <div className="artists-hover">
                <p>
                  <strong>Posture:</strong>
                  lifting dumbbells
                </p>

                <p>
                  <strong>Burn:</strong>
                  upper arm
                </p>

                <p>
                  <strong>Do:</strong>
                  20 s
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href="https://www.youtube.com/shorts/FOxCMhexNfI">watch</a>
                </p>
              </div>
            </div>
          </Col>

          <Col lg={5} xs={12}>
            <div className="artists-thumb">
              <div className="artists-image-wrap">
                <img src="images/gallery/IMG_2292.jpg" className="artists-image img-fluid" />
              </div>

              <div className="artists-hover">
                <p>
                  <strong>Posture:</strong>
                  lifting dumbbells
                </p>

                <p>
                  <strong>Burn:</strong>
                  upper arm
                </p>

                <p>
                  <strong>Do:</strong>
                  20 s
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href="https://www.youtube.com/shorts/FOxCMhexNfI">watch</a>
                </p>
              </div>
            </div>

            <div className="artists-thumb">
              <img src="images/gallery/8.jpg" className="artists-image img-fluid" />

              <div className="artists-hover">
                <p>
                  <strong>Posture:</strong>
                  lifting dumbbells
                </p>

                <p>
                  <strong>Burn:</strong>
                  upper arm
                </p>

                <p>
                  <strong>Do:</strong>
                  20 s
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href="https://www.youtube.com/shorts/FOxCMhexNfI">watch</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkOutSection;