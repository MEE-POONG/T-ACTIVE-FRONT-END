import React, { FC } from 'react';
import moment from 'moment';
import { Container, Row, Col, Table, Carousel } from 'react-bootstrap';
import { event, blog } from './../../data/test';
import Link from 'next/link';
interface SteviaProps {
  id: string;
  translateX: number;
  translateY: number;
}

const BlogEventSection: FC<SteviaProps> = ({ id, translateX, translateY }) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  }, [translateX, translateY]);
  const currentDate = new Date().toISOString().split('T')[0];

  const eventsOnDate = event.filter(e => e.start.split('T')[0] >= currentDate);
  const blogsOnDate = blog.filter(b => b.start.split('T')[0] >= currentDate);

  return (
    <section className="blogevent-section section-padding " id="section_4">
      <Container fluid>
        <Row className='w-100 mx-0 px-0'>
          <Col xs={12} md={6} lg={6} className='blog p-0 m-0'>
            <h1 className="f-s-cookie mb-4 text-center pt-5">Blogs</h1>
            <Carousel controls={false} indicators={false}>
              {blogsOnDate.map((item, index) => (
                <Carousel.Item key={`${item?.id}`}>
                  <img
                    className="d-block w-100 object-fit-cover"
                    height={750}
                    src={item?.img}
                    alt={`${item?.title} slide`}
                  />
                  <Carousel.Caption>
                    <div>
                      <h3 className='f-c-gold'>{item?.title}</h3>
                      <p className='f-c-gold'>{item?.srcipOne}</p>
                    </div>
                    <div className='date '>
                      <div className='h3 f-c-gold mb-0'>
                        {moment(item.start).format('DD MMM YY')}
                      </div>
                      <Link className="link-fx-1 color-contrast-higher f-c-gold me-5" href="about">
                        <h3 className='f-c-gold'>
                          <span >Read Blog</span>
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
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={6} lg={6} className='event p-0 m-0'>
            <h1 className="f-s-cookie mb-4 text-center pt-5">Event</h1>
            <Row className='p-0 m-0'>
              <Col xs={6} className='p-0 m-0'>
                <Carousel controls={false} indicators={false}>
                  {eventsOnDate.map((item, index) => (
                    <Carousel.Item key={`${item?.id}`}>
                      <img
                        className="d-block w-100 object-fit-cover"
                        height={375}
                        src={item?.img}
                        alt={`${item?.title} slide`}
                      />
                      <Carousel.Caption>
                        <div>
                          <h3 className='f-c-gold'>{item?.title}</h3>
                          <p className='f-c-gold'>{item?.srcipOne}</p>
                        </div>
                        <div className='date '>
                          <div className='h3 f-c-gold mb-0'>
                            {moment(item.start).format('DD MMM YY')}
                          </div>
                          <Link className="link-fx-1 color-contrast-higher f-c-gold me-5" href="about">
                            <h3 className='f-c-gold'>
                              <span >Read Blog</span>
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
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col xs={6} className='p-0 m-0'>
                <Carousel controls={false} indicators={false}>
                  {eventsOnDate.map((item, index) => (
                    <Carousel.Item key={`${item?.id}`}>
                      <img
                        className="d-block w-100 object-fit-cover"
                        height={375}
                        src={item?.img}
                        alt={`${item?.title} slide`}
                      />
                      <Carousel.Caption>
                        <div>
                          <h3 className='f-c-gold'>{item?.title}</h3>
                          <p className='f-c-gold'>{item?.srcipOne}</p>
                        </div>
                        <div className='date '>
                          <div className='h3 f-c-gold mb-0'>
                            {moment(item.start).format('DD MMM YY')}
                          </div>
                          <Link className="link-fx-1 color-contrast-higher f-c-gold me-5" href="about">
                            <h3 className='f-c-gold'>
                              <span >Read Blog</span>
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
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col xs={6} className='p-0 m-0'>
                <Carousel controls={false} indicators={false}>
                  {eventsOnDate.map((item, index) => (
                    <Carousel.Item key={`${item?.id}`}>
                      <img
                        className="d-block w-100 object-fit-cover"
                        height={375}
                        src={item?.img}
                        alt={`${item?.title} slide`}
                      />
                      <Carousel.Caption>
                        <div>
                          <h3 className='f-c-gold'>{item?.title}</h3>
                          <p className='f-c-gold'>{item?.srcipOne}</p>
                        </div>
                        <div className='date '>
                          <div className='h3 f-c-gold mb-0'>
                            {moment(item.start).format('DD MMM YY')}
                          </div>
                          <Link className="link-fx-1 color-contrast-higher f-c-gold me-5" href="about">
                            <h3 className='f-c-gold'>
                              <span >Read Blog</span>
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
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col xs={6} className='p-0 m-0'>
                <Carousel controls={false} indicators={false}>
                  {eventsOnDate.map((item, index) => (
                    <Carousel.Item key={`${item?.id}`}>
                      <img
                        className="d-block w-100 object-fit-cover"
                        height={375}
                        src={item?.img}
                        alt={`${item?.title} slide`}
                      />
                      <Carousel.Caption>
                        <div>
                          <h3 className='f-c-gold'>{item?.title}</h3>
                          <p className='f-c-gold'>{item?.srcipOne}</p>
                        </div>
                        <div className='date '>
                          <div className='h3 f-c-gold mb-0'>
                            {moment(item.start).format('DD MMM YY')}
                          </div>
                          <Link className="link-fx-1 color-contrast-higher f-c-gold me-5" href="about">
                            <h3 className='f-c-gold'>
                              <span >Read Blog</span>
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
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="video-wrap w-100 h-100 position-absolute">
        <div id={id} ref={elementRef} style={{ backgroundImage: "url(/images/gallery/stevia-vactor-bg.png)" }} className="custom-video" />
      </div>
    </section>
  );
};

export default BlogEventSection;
