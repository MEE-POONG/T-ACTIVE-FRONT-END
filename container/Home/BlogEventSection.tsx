import React, { FC } from 'react';
import moment from 'moment';
import { Container, Row, Col, Table, Carousel, Card } from 'react-bootstrap';
import { event, blog } from './../../data/test';
import Link from 'next/link';

type BlogItem = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  link?: string;
  // Add other properties as needed
};
type EventItem = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  link?: string;
  // Add other properties as needed
};
const BlogEventSection: FC = () => {

  const blogItems = blog.map((item: BlogItem) => (
    <Carousel.Item key={item.id}>
      <div className="artists-image-wrap">
        <img src={item.img} className="artists-image img-fluid" alt={item.title} />
      </div>
      <div className="artists-hover">
        <p>
          <strong>Blog :</strong> {item.title}
        </p>
        <p>
          <strong>subTitle :</strong> {item.subtitle}
        </p>
        <hr />
        <p className="mb-0 text-center">
          <a href={item.link} className="px-3 py-2">
            Read
          </a>
        </p>
      </div>
    </Carousel.Item>
  ));
  const eventItems = event.map((item: EventItem) => (
    <Carousel.Item key={item.id}>
      <div className="artists-image-wrap">
        <img src={item.img} className="artists-image img-fluid" alt={item.title} />
      </div>
      <div className="artists-hover">
        <p>
          <strong>Event :</strong> {item.title}
        </p>
        <p>
          <strong>subTitle :</strong> {item.subtitle}
        </p>
        <hr />
        <p className="mb-0 text-center">
          <a href={item.link} className="px-3 py-2">
            Read
          </a>
        </p>
      </div>
    </Carousel.Item>
  ));

  return (
    <section className="blogevent-section section-padding" id="section_3">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="f-s-cookie mb-4 text-center">Blogs</h1>
            <div className="artists-thumb">
              <Carousel controls={false} indicators={false}>
                {blogItems}
              </Carousel>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h1 className="f-s-cookie mb-4 text-center">Events</h1>
            <div className="artists-thumb">
              <div className="artists-thumb">
                <Carousel controls={false} indicators={false}>
                  {eventItems}
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogEventSection;
