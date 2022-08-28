import React from 'react';
import video from "../../../videos/v.mp4";
import posterImg from "../../../images/vospitatel_dolzhen 1.png";
import SectionHeader from './SomeParts/SectionHeader';
import Slider from "react-slick";
import {Container, Row, Col} from 'react-bootstrap';


function AppVideoGallerySection ({heading, text}) {
   const videos=[
      {
         id: 1,
         video: video,
         posterImg: posterImg,
      },
      {
         id: 2,
         video: video,
         posterImg: posterImg,
      },
      {
         id: 3,
         video: video,
         posterImg: posterImg,
      },
      {
         id: 4,
         video: video,
         posterImg: posterImg,
      },
      {
         id: 5,
         name:"Deepak",
         video: video,
         posterImg: posterImg,
      },
      
      ]
   var settings = {
   breakpoint: 1000,
   dots: true,
   lazyLoad: true,
   infinite: true,
   touchMove: true,
   useCSS: true,
   dotsClass: "slick-dots slick-thumb",
   focusOnSelect: true,
   adaptiveHeight: true,
   speed: 1000,
   pauseOnHover: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   initialSlide: 2,
   responsive: [
      {
         breakpoint: 600,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         }
      }
   ]
   };

   
   return (
         <section className={`app__videos__section  my-5`}>
            <SectionHeader heading={heading} text={text}/>

            <Container fluid>
               <Row>
                  <Col>
                     <Slider {...settings} className="videos__slider py-4">
                        {
                           videos.map((item, index)=>
                           <div className="videos__item" key={item.id}>
                              <video poster={item.posterImg} className="video-container video-container-overlay mx-auto" loop controls>
                                 <source src={item.video} type="video/mp4"/>
                              </video>
                           </div>
                           )
                        }
                     </Slider>
                  </Col>
               </Row>
            </Container>            
         </section>
         );
      };


export default AppVideoGallerySection;
