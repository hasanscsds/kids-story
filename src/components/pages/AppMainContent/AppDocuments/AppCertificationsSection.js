import React from 'react';
import SectionHeader from '../SomeParts/SectionHeader';
import certificateImg from '../../../../images/sertificate-img.png';
import Slider from "react-slick";
import {Container, Row, Col} from 'react-bootstrap';



function AppCertificationsSection () {
   
   const SlickArrowLeft = ({onClick}) => (
      <span className="arrow arrow__left" onClick={onClick}>
         <i className="fa-solid fa-chevron-left"></i>
      </span>
   );
   
   const SlickArrowRight = ({onClick}) => (
      <span className="arrow arrow__right" onClick={onClick}>
         <i className="fa-solid fa-chevron-right"></i>
      </span>
   );

   const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      lazyLoad: true,
      touchMove: true,
      useCSS: true,
      speed: 1000,
      focusOnSelect: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      responsive: [
         {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
            }
         }
      ]
   }
   return (
      <section className="documents__section my-5">
         <SectionHeader heading={"Наши сертификаты"}/>

         <Container fluid>
               <Row>
                  <Col>
                     <Slider {...settings} className="certificates__slider">
                           <div className="certificates__item">
                              <img className="certificates__img" src={certificateImg} alt="img"/>
                           </div>
                           <div className="certificates__item">
                              <img className="certificates__img" src={certificateImg} alt="img"/>
                           </div>
                           <div className="certificates__item">
                              <img className="certificates__img" src={certificateImg} alt="img"/>
                           </div>
                           <div className="certificates__item">
                              <img className="certificates__img" src={certificateImg} alt="img"/>
                           </div>
                           <div className="certificates__item">
                              <img className="certificates__img" src={certificateImg} alt="img"/>
                           </div>
                           <div className="certificates__item">
                              <img className="certificates__img" src={certificateImg} alt="img"/>
                           </div>
                     </Slider>
                  </Col>
               </Row>
            </Container>
      </section>
   );
};


export default AppCertificationsSection;