import { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button, Form } from 'react-bootstrap';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <section className="contact-section section-padding" id="section_6">
      <Container>
        <Row>
          <Col lg={8} md={10} sm={12} className="mx-auto">
            <h2 className="text-center f-s-cookie mb-4">Interested? Let's talk</h2>
            <Tab.Container id="nav-tab" defaultActiveKey="contact-form">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="contact-form">
                    <h5>Contact Form</h5>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contact-map">
                    <h5>Google Maps</h5>
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="shadow-lg mt-5">
                <Tab.Pane eventKey="contact-form">
                  <Form className="custom-form contact-form mb-5 mb-lg-0" onSubmit={handleSubmit}>
                    <Form.Group controlId="contact-name" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="contact-email" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="contact-company" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Company"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="contact-message" className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="col-lg-4 col-md-10 col-8 mx-auto">
                      <Button type="submit" className="form-control">
                        Send message
                      </Button>
                    </div>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="contact-map">
                  <iframe
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                    width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
