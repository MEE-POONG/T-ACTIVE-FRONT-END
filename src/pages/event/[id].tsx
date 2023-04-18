/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { event } from '../../../data/test';
import moment from "moment";
import { useRouter } from "next/router";

export default function EventID() {
    const router = useRouter();
    const { id } = router.query;
    const eventItem = event.find(item => item.id === id);


    return (
        <LayOut>
            <div className="event-page">
                <Container className="event-detail">
                    <h2 className="text-center mb-5 title">{eventItem?.title}</h2>
                    <div className="text-center">
                        <img src={"../" + eventItem?.img} alt={"img : " + eventItem?.title} className="show" />
                    </div>
                    <Row>
                        <Col sm={12}>
                            <p>{eventItem?.srcipOne}</p>
                        </Col>
                        <Col sm={12}>
                            <p>{eventItem?.srcipTwo}</p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.subDetail}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.detailOne}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.detailTwo}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.detailThree}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.listOne}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.listTwo}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.listThree}
                            </p>
                        </Col>
                        {/* <Col sm={12}>
                            <p className="source">
                              <i> Source: {eventItem?.source}</i>  
                            </p>
                        </Col> */}

                    </Row>
                </Container>
            </div>
        </LayOut>
    )
}