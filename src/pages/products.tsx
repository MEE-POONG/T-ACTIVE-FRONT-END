import LayOut from "@/components/LayOut";
import { Col, Container, Row } from "react-bootstrap";

export default function ProductsPage(){
    return(
        <LayOut>
            <div className="products-page">
                <Container>
                    <h2>Our Products</h2>
                    <Row>
                        <Col sm={6}>
                            <img className="p-image" src="/images/product/IMG_O.jpg" alt=""/>
                        </Col>
                        <Col sm={6}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayOut>
    )
}