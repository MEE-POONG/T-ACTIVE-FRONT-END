import { GiCurledLeaf } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";

const SiteHeader = () => {
    return (
        <header className="site-header">
            <Container>
                <Row>
                    <Col lg={12} xs={12} className="d-flex flex-wrap">
                        <p className="d-flex me-4 mb-0">
                            <GiCurledLeaf className="custom-icon me-2" />
                            <strong className="text-dark">Welcome to Music Festival 2023</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default SiteHeader;
