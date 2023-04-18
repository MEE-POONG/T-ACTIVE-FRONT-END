/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { event } from "../../../data/test";
import moment from "moment";

export default function EventPage() {
    
    return (
        <LayOut>
            <div className="event-page">
                <Container>
                    <h2 className="text-center mb-5">Events</h2>
                    <Row xs="auto">
                        {event.map((item) => (
                            <Col key={item.id} sm={12} md={6} lg={4} className="text-center">
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
                                                <Col className="p-0 m-0 text-start" xs={12}>
                                                    <p>&nbsp; {item.srcipOne}</p>
                                                </Col>
                                                <Col className="p-0 m-0 text-end" xs={5}>
                                                    <p><strong className="m-0">start&nbsp; :</strong></p>
                                                </Col>
                                                <Col className="p-0 m-0 text-start" xs={7}>
                                                    <p>&nbsp; {moment(item.start).format('HH:mm DD MMM YY')}</p>
                                                </Col>
                                                <Col className="p-0 m-0 text-end" xs={5}>
                                                    <p><strong className="m-0">end&nbsp; :</strong></p>
                                                </Col>
                                                <Col className="p-0 m-0 text-start" xs={7}>
                                                    <p>&nbsp; {moment(item.end).format('HH:mm DD MMM YY')}</p>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href={"event/" + item.id }>
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
                            </Col>
                        ))}
                    </Row>

                </Container>
            </div>
        </LayOut>
    )
}