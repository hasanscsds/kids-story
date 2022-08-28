/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import data from "../../../JSON/profileData.json"
import Slider from "react-slick";
import SectionHeader from '../SomeParts/SectionHeader';
import FeedbacksItem from './FeedbacksItem';
import {Container, Row, Col} from 'react-bootstrap';


function AppFeaturesSection ({className}) {
   const [avatars, setAvatars]=useState([])


   useEffect(()=>{
      setAvatars(data.filter((item, index)=>index >0 && index < 6))
   },[])

   const SlickArrowLeft = ({onClick}) => (
      <span className="arrow arrow__left" onClick={onClick}>
         <i class="fa-solid fa-chevron-left"></i>
      </span>
   );
   
   const SlickArrowRight = ({onClick}) => (
      <span className="arrow arrow__right" onClick={onClick}>
         <i class="fa-solid fa-chevron-right"></i>
      </span>
   );

   const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      touchMove: true,
      useCSS: true,
      dotsClass: "slick-dots slick-thumb",
      focusOnSelect: true,
      adaptiveHeight: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      className: "slider",
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
      <section className={`my-5 py-4 ${className}`}>
         <SectionHeader heading={"Отзывы о саде"}/>
         
         <Container fluid>
            <Row>
               <Col>
                  <Slider {...settings} className="feedbacks__slider">
                     {
                        avatars.map((item, index)=>
                           <FeedbacksItem item={item}/>
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