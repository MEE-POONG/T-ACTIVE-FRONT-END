import React, { useEffect } from 'react';
import AOS from 'aos';
import { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button, Form } from 'react-bootstrap';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <section className="contact-section section-padding" id="section_6">
      <Container>
        <Row>
          <Col lg={8} md={10} sm={12} className="mx-auto">
            <h2 className="text-center f-s-head mb-4" data-aos="fade-up">Interested? Let's talk</h2>
            <Tab.Container id="nav-tab" defaultActiveKey="contact-form" >
              <Nav variant="tabs" className="justify-content-center" data-aos="zoom-in-up">
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

              <Tab.Content className="shadow-lg mt-5" data-aos="zoom-in-down">
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
                    src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d240.90067081684165!2d102.1021451421363!3d14.969888034197718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e6!4m0!4m1!2s88%20Ratchanikun%20Rd%2C%20Tambon%20Nai%20Mueang%2C%20Amphoe%20Mueang%20Nakhon%20Ratchasima%2C%20Chang%20Wat%20Nakhon%20Ratchasima%203000088%20Ratchanikun%20Rd%2C%20Tambon%20Nai%20Mueang%2C%20Amphoe%20Mueang%20Nakhon%20Ratchasima%2C%20Chang%20Wat%20Nakhon%20Ratchasima%2030000!5e0!3m2!1sen!2sth!4v1681983551282!5m2!1sen!2sth"
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
