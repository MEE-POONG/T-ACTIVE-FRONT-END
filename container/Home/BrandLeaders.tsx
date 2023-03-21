import React, { useEffect, useState } from 'react';
import AOS from 'aos';

export default function BrandLeaders() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="bg-black py-vh-3">
            <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">

                <div className="row gx-5">
                    <div className="col-12 col-md-6">
                        <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="img/abstract3.webp" width="582" height="327" alt="abstract image"
                                    className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">Ipsum dolor est</h2>
                                    <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                    <a href="#" className="link-fancy link-fancy-light">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-transparent" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="img/abstract2.webp" width="582" height="442" alt="abstract image"
                                    className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">Ipsum dolor est</h2>
                                    <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                    <a href="#" className="link-fancy link-fancy-light">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-5 pt-0 mt-5" data-aos="fade">
                            <span className="h5 text-secondary fw-lighter">What we don´t know</span>
                            <h2 className="display-4">There is a lot we don´t know. Here is a small sneak peek</h2>
                        </div>
                        <div className="card bg-transparent mb-5 mt-5" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="  img/abstract17.webp" width="582" height="390" alt="abstract image"
                                    className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">Ipsum dolor est</h2>
                                    <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                    <a href="#" className="link-fancy link-fancy-light">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-transparent" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="img/abstract4.webp" width="582" height="327" alt="abstract image"
                                    className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">Ipsum dolor est</h2>
                                    <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                    <a href="#" className="link-fancy link-fancy-light">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}