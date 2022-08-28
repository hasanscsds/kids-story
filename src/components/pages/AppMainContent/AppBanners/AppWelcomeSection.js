import React from 'react';
import Slider from "react-slick";
import {Container, Row, Col} from 'react-bootstrap';

function AppWelcomeBannerSection () {
   
   const SlickArrowLeft = ({ onClick }) => (
      <span className="arrow arrow__left" onClick={onClick}>
         <i className="fa-solid fa-chevron-left"></i>
   </span>
   );
   
   const SlickArrowRight = ({ onClick }) => (
   <span className="arrow arrow__right" onClick={onClick}>
         <i className="fa-solid fa-chevron-right"></i>
   </span>
   );

   const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
   }
   return (
         <section className={`app__welcome__section mb-5`}>
            <Container fluid>
               <Row>
                  <Col md="auto">
                     <Slider {...settings} className="welcome__banner__slider">
                  <div className="slick__item active">
                     <h1>Kidsstory</h1>
                     <p>Английский детский 
                        сад и клуб</p>
                  </div>
                  <div className="slick__item">
                     <h1>Kidsstory</h1>
                     <p>Английский детский 
                        сад и клуб</p>
                  </div>
                  <div className="slick__item">
                     <h1>Kidsstory</h1>
                     <p>Английский детский 
                        сад и клуб</p>
                  </div>
                     </Slider>
                  </Col>
                  <Col md="auto">
                     <div className="banner__form__content">
                        <h4 className="banner__form__content__label form__label">Запишитесь
                        на персональную
                        экскурсию</h4>
                        <p className="banner__form__content__text form__text">Заполните форму и посмотрите 
                        детский сад вживую в удобное для 
                        вас время</p>
                        <form action="" className="banner__form__content__details">
                           <input className='' type="text" placeholder="Ваше имя" required/>
                           <input className='' type="number" pattern="(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})" placeholder="+998 ( _ _ ) - _  _  _ - _  _ - _  _" required/>
                           <input className='' type="gmail" placeholder="Ваш e-mail" required/>
                           <label class="control control-radio">
                                 <input type="radio" name="radio" />
                                 <div className="control_indicator basic__red"></div>
                                    Я принимаю условия<br/> 
                                    пользовательского соглашения
                           </label>
                           <input className="" type="submit" value="записаться"/>
                        </form>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         );
      };

export default AppWelcomeBannerSection;