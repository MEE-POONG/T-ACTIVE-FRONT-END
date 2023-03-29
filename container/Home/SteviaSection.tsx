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

    <section className="pricing-section section-padding section-bg" id="section_5" >
      <div style={{ backgroundImage: 'url(./images/gallery/bg1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      height: 1185.54px;
    transform: translate(0px, 243.019px);
      </div>
      <Container className='what-stevia'>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center f-s-cookie m-0">{productIntro[0]?.title}</h1>
            <h3 className='text-center'>{productIntro[0]?.srcipOne}</h3>
            <h3 className='text-center'>{productIntro[0]?.srcipTwo}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <p>&emsp;&emsp;
              Stevia is a natural sweetener.
              The leaves of the plant contain sweet compounds called steviol glycosides.
              which is 400 times sweeter than normal sugar
            </p>
          </Col>
          <Col lg={4}>
            <p>&emsp;&emsp;
              Our products are sweet, delicious, not bitter, not overpowering, and smell good.
            </p>
          </Col>
          <Col lg={4}>
            <p>&emsp;&emsp;
              Stevia extract can withstand heat up to 220 degrees and can be used in baking and cooking instead of sugar.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="d-flex">
              <div className='text-center w-100'>
                <img src="/images/icon/sugar.png" alt='suger-icon' />
                <h3>
                  <small>SUGAR</small> 0%
                </h3>
              </div>
            </div>
            <p className='mx-4 text-center'>
              Great choice for diabetics or people who are watching their blood sugar levels.
            </p>
          </Col>
          <Col lg={4}>
            <div className="d-flex">
              <div className='text-center w-100'>
                <img src="/images/icon/kcal2.png" alt='suger-icon' />
                <h3>
                  <small>CALORIE</small> 0%
                </h3>
              </div>
            </div>
            <p className='mx-4 text-center'>
              A good choice for those who want to reduce their calorie intake.
            </p>
          </Col>
          <Col lg={4}>
            <div className="d-flex">
              <div className='text-center w-100'>
                <img src="/images/icon/lowsalt.png" alt='suger-icon' />
                <h3>
                  <small>SODIUM</small> 0%
                </h3>
              </div>
            </div>
            <p className='mx-4 text-center'>
              A good option for those on a low carb or ketogenic diet.
            </p>
          </Col>
          <Col lg={12}>
            {/* <h3 className='w-100 text-center'>
              Pros of Stevia Extract in Taste and Cooking
            </h3>
            <ul className="pricing-list mt-3">
              <li className="pricing-list-item">No effect on blood sugar. </li>
              <li className="pricing-list-item">have antioxidant properties</li>
              <li className="pricing-list-item">help lower blood pressure.</li>
              <li className="pricing-list-item">have antimicrobial properties</li>
              <li className="pricing-list-item">reduce inflammation</li>
              <li className="pricing-list-item">No effect on blood sugar. </li>
              <li className="pricing-list-item">have antioxidant properties</li>
              <li className="pricing-list-item">help lower blood pressure.</li>
              <li className="pricing-list-item">have antimicrobial properties</li>
              <li className="pricing-list-item">reduce inflammation</li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SteviaSection;
