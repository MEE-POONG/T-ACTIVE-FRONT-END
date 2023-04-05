/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function BlogPage(){
    return(
        <LayOut>
            <div className="blog-page">
                <Container>
                    <h2 className="text-center mb-5"> Work Out</h2>
                    <Row>
                        <Col lg={5} xs={12}>
                            <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src="images/gallery/IMG_2292.jpg" className="blog-img img-fluid" />
                            </div>

                            <div className="card-text">
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

                            {/* <div className="artists-hover">
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
                            </div> */}
                            </div>
                        </Col>
                        <Col lg={5} xs={12}>
                            <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src="images/gallery/IMG_2292.jpg" className="artists-image img-fluid" />
                            </div>

                            {/* <div className="artists-hover">
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
                            </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayOut>
    )
}