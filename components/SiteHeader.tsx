import { GiCurledLeaf } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";

const SiteHeader = () => {
    return (
        <header className="site-header">
            <Container>
                <Row>
                    <Col lg={12} xs={12} className="d-flex flex-wrap dark-gold">
                        <p className="d-flex me-4 mb-0 dark-gold">
                            <GiCurledLeaf className="me-2 h5" />
                            <strong className="f-s-cookie">Welcome to T-Active-Stevia</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default SiteHeader;
