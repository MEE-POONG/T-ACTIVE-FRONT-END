import { Container, Row, Col } from 'react-bootstrap';

const ArtistsSection = () => {
  return (
    <section className="artists-section section-padding" id="section_3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h2 className="mb-4">Meet Artists</h2>
          </Col>
          <Col lg={5} xs={12}>
            <div className="artists-thumb">
              <div className="artists-image-wrap">
                <img src="images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg" className="artists-image img-fluid" />
              </div>

              <div className="artists-hover">
                <p>
                  <strong>Name:</strong>
                  Madona
                </p>

                <p>
                  <strong>Birthdate:</strong>
                  August 16, 1958
                </p>

                <p>
                  <strong>Music:</strong>
                  Pop, R&amp;B
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href="#">Madona Official</a>
                </p>
              </div>
            </div>
          </Col>

          <Col lg={5} xs={12}>
            <div className="artists-thumb">
              <div className="artists-image-wrap">
                <img src="images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg" className="artists-image img-fluid" />
              </div>

              <div className="artists-hover">
                <p>
                  <strong>Name:</strong>
                  Rihana
                </p>

                <p>
                  <strong>Birthdate:</strong>
                  Feb 20, 1988
                </p>

                <p>
                  <strong>Music:</strong>
                  Country
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href="#">Rihana Official</a>
                </p>
              </div>
            </div>

            <div className="artists-thumb">
              <img src="images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg" className="artists-image img-fluid" />

              <div className="artists-hover">
                <p>
                  <strong>Name:</strong>
                  Bruno Bros
                </p>

                <p>
                  <strong>Birthdate:</strong>
                  October 8, 1985
                </p>

                <p>
                  <strong>Music:</strong>
                  Pop
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href="#">Bruno Official</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ArtistsSection;