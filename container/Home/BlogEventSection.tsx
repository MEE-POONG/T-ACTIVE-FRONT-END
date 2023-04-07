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
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{item.title}</h3>
        <div className="mt-3">
          <Row>
            <Col className="p-0 m-0" xs={5}>
              <p><strong className="m-0">SubTitle :</strong></p>
            </Col>
            <Col className="p-0 m-0" xs={7}>
              <p>{item.subtitle}</p>
            </Col>
            <Col className="p-0 m-0" xs={5}>
              <p><strong className="m-0">start :</strong></p>
            </Col>
            <Col className="p-0 m-0" xs={7}>
              {/* <p>{moment(item.start).format('HH:mm DD MMM YY')}</p> */}
            </Col>
            <Col className="p-0 m-0" xs={5}>
              <p><strong className="m-0">end :</strong></p>
            </Col>
            <Col className="p-0 m-0" xs={7}>
              {/* <p>{moment(item.end).format('HH:mm DD MMM YY')}</p> */}
            </Col>
          </Row>
          <hr />
          <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href="about">
            <h3 className='f-c-gold m-0'>
              <span>Read Stevia</span>
              <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  ));
  const eventItems = event.map((item: EventItem) => (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{item.title}</h3>
        <div className="mt-3">
          <Row>
            <Col className="p-0 m-0" xs={5}>
              <p><strong className="m-0">SubTitle :</strong></p>
            </Col>
            <Col className="p-0 m-0" xs={7}>
              <p>{item.subtitle}</p>
            </Col>
            <Col className="p-0 m-0" xs={5}>
              <p><strong className="m-0">start :</strong></p>
            </Col>
            <Col className="p-0 m-0" xs={7}>
              {/* <p>{moment(item.start).format('HH:mm DD MMM YY')}</p> */}
            </Col>
            <Col className="p-0 m-0" xs={5}>
              <p><strong className="m-0">end :</strong></p>
            </Col>
            <Col className="p-0 m-0" xs={7}>
              {/* <p>{moment(item.end).format('HH:mm DD MMM YY')}</p> */}
            </Col>
          </Row>
          <hr />
          <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href="about">
            <h3 className='f-c-gold m-0'>
              <span>Read Stevia</span>
              <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="blogevent-section section-padding" id="section_3">
      <Container>
        <Row>
          <Col xs={12} md={6} className='blog-page'>
            <h1 className="f-s-cookie mb-4 text-center">Blogs</h1>
            <div className="artists-thumb">
              {blogItems}
            </div>
          </Col>
          <Col xs={12} md={6} className='event-page'>
            <h1 className="f-s-cookie mb-4 text-center">Events</h1>
            <div className="artists-thumb">
              <div className="artists-thumb">
                {eventItems}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogEventSection;
