import LayOut from "@/components/LayOut";
import { Container } from "react-bootstrap";

export default function ProductsPage(){
    return(
        <LayOut>
            <div className="products-page">
                <Container>
                    <h2>Our Products</h2>
                </Container>
            </div>
        </LayOut>
    )
}