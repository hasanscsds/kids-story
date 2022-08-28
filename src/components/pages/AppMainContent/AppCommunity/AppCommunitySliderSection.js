import React, {useState, useEffect} from 'react';
import data from "../../../JSON/profileData.json";
import Slider from "react-slick";
import SectionHeader from '../SomeParts/SectionHeader';
import AppAvatarItem from './AppAvatarItem';
import {Container, Row, Col} from 'react-bootstrap';

function AppFeaturesSection () {
   const [avatars, setAvatars]=useState([])


   useEffect(()=>{
      setAvatars(data)
   },[])


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
      dotsClass: 'slick-dots',
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
         <section className={`my-5`}>
            <SectionHeader heading={"Наша команда"}/>

            <Container fluid>
               <Row>
                  <Col>
                     <Slider {...settings}>
                        {
                           avatars.map((item, index)=>
                              <AppAvatarItem item={item} key={item.id} className={"slick__item"}/>
                           )
                        }
                     </Slider>
                  </Col>
               </Row>
            </Container>
         </section>
      );
   };


export default AppFeaturesSection;