import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { intro, productList } from '../../data/test';

const SteviaSection = () => {
  const productIntro = intro.filter(item => item.pagelist === 'stevia');
  const productsWithPromotion = productList;

  var settingsSlide = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="pricing-section section-padding section-bg" id="section_5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center f-s-cookie m-0">{productIntro[0]?.title}</h1>
            <h3 className='text-center'>{productIntro[0]?.srcipOne}</h3>
            <h3 className='text-center'>{productIntro[0]?.srcipTwo}</h3>
          </Col>
        </Row>
        <Slider {...settingsSlide}>
          {productsWithPromotion?.map((productShow) => (
            <div key={productShow?.id} >
              <div className="pricing-thumb mx-auto">
                <h3 className='text-center'>
                  {productShow?.name}
                </h3>
                <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                  <span>Buy Ticket</span>
                  <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="16" cy="16" r="15.5"></circle>
                      <line x1="10" y1="18" x2="16" y2="12"></line>
                      <line x1="16" y1="12" x2="22" y2="18"></line>
                    </g>
                  </svg>
                </a>
                <img src={productShow?.img} alt={productShow?.name} className='w-100 object-fit-contain' />
                <div className="d-flex">
                  <p className={productShow?.price > 0 ? "pricing-tag ms-auto" : "d-none"}>
                    <span>{productShow?.price}.-</span>
                  </p>
                </div>

              </div>
            </div>
          ))}


          <div >
            <div className="pricing-thumb m-2">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Early Bird</small> $120
                  </h3>
                  <p>Including good things:</p>
                </div>
                <p className="pricing-tag ms-auto">
                  Save up to <span>50%</span>
                </p>
              </div>
              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">platform for potential customers</li>
                <li className="pricing-list-item">digital experience</li>
                <li className="pricing-list-item">high-quality sound</li>
                <li className="pricing-list-item">standard content</li>
              </ul>
              <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                <span>Buy Ticket</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div >
            <div className="pricing-thumb m-2">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Early Bird</small> $120
                  </h3>
                  <p>Including good things:</p>
                </div>
                <p className="pricing-tag ms-auto">
                  Save up to <span>50%</span>
                </p>
              </div>
              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">platform for potential customers</li>
                <li className="pricing-list-item">digital experience</li>
                <li className="pricing-list-item">high-quality sound</li>
                <li className="pricing-list-item">standard content</li>
              </ul>
              <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                <span>Buy Ticket</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div >
            <div className="pricing-thumb m-2">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Early Bird</small> $120
                  </h3>
                  <p>Including good things:</p>
                </div>
                <p className="pricing-tag ms-auto">
                  Save up to <span>50%</span>
                </p>
              </div>
              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">platform for potential customers</li>
                <li className="pricing-list-item">digital experience</li>
                <li className="pricing-list-item">high-quality sound</li>
                <li className="pricing-list-item">standard content</li>
              </ul>
              <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                <span>Buy Ticket</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div >
            <div className="pricing-thumb m-2">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Early Bird</small> $120
                  </h3>
                  <p>Including good things:</p>
                </div>
                <p className="pricing-tag ms-auto">
                  Save up to <span>50%</span>
                </p>
              </div>
              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">platform for potential customers</li>
                <li className="pricing-list-item">digital experience</li>
                <li className="pricing-list-item">high-quality sound</li>
                <li className="pricing-list-item">standard content</li>
              </ul>
              <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                <span>Buy Ticket</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="pricing-thumb m-2">
            <div className="d-flex">
              <div>
                <h3>
                  <small>Standard</small> $240
                </h3>
                <p>What makes a premium festava?</p>
              </div>
            </div>
            <ul className="pricing-list mt-3">
              <li className="pricing-list-item">platform for potential customers</li>
              <li className="pricing-list-item">digital experience</li>
              <li className="pricing-list-item">high-quality sound</li>
              <li className="pricing-list-item">premium content</li>
              <li className="pricing-list-item">live chat support</li>
            </ul>
            <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>Buy Ticket</span>
              <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
          <div className="pricing-thumb m-2">
            <div className="d-flex">
              <div>
                <h3>
                  <small>Standard</small> $240
                </h3>
                <p>What makes a premium festava?</p>
              </div>
            </div>
            <ul className="pricing-list mt-3">
              <li className="pricing-list-item">platform for potential customers</li>
              <li className="pricing-list-item">digital experience</li>
              <li className="pricing-list-item">high-quality sound</li>
              <li className="pricing-list-item">premium content</li>
              <li className="pricing-list-item">live chat support</li>
            </ul>
            <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>Buy Ticket</span>
              <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
        </Slider>
      </Container>
    </section>
  );
}

export default SteviaSection;
