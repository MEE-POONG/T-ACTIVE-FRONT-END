import React, { useEffect, useState } from 'react';
import AOS from 'aos';

export default function ImageSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <div className="w-100 position-relative bg-black text-white bg-cover d-flex align-items-center">
            <div className="container-fluid px-vw-5">
                <div className="position-absolute w-100 h-50 bg-dark bottom-0 start-0"></div>
                <div className="row d-flex align-items-center position-relative justify-content-center px-0 g-5">
                    <div className="col-12 col-lg-6">
                        <img
                            src="img/abstract18.webp"
                            width="2280"
                            height="1732"
                            alt="abstract image"
                            className="img-fluid position-relative rounded-5 shadow"
                            data-aos="fade-up"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <img
                            src="img/abstract6.webp"
                            width="1116"
                            height="1578"
                            alt="abstract image"
                            className="img-fluid position-relative rounded-5 shadow"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <img
                            src="img/abstract9.webp"
                            width="1116"
                            height="848"
                            alt="abstract image"
                            className="img-fluid position-relative rounded-5 shadow"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
