/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import React from "react";
import { Container } from "react-bootstrap";

export default function BlogPage(){
    return(
        <LayOut>
            <div className="blog-page">
                <Container>
                    <h2 className="text-center mb-5"> Work Out</h2>
                </Container>
            </div>
        </LayOut>
    )
}