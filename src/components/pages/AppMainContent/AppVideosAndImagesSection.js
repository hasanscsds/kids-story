import React, {useState, useEffect} from 'react';
import data from "../../JSON/servicesData.json";
import {Container, Row, Col} from 'react-bootstrap';

function AppFeaturesSection ({className}) {
   const [images, setImages]=useState([])
   const [moreImages, setMoreImages]=useState(window.innerWidth > 600? 10 : 7);


   useEffect(()=>{
      setImages(data.filter((item, index)=>item.id >0 && item.id < moreImages));
   },[moreImages])

   
   function addMoreFeedbacks (){
      if (window.innerWidth < 600) {
         setMoreImages(moreImages + 2);
      } else{
         setMoreImages(moreImages + 4);
      }
   }
   return (
         <section className={` my-5 ${className}`}>
            <Container fluid>
               <Row>
                  <Col className="images">
                     {
                        images.map((item, index)=>
                           <div className="images__item" key={item.id}>
                              <img src={item.servicesBg} alt="img" />
                           </div>
                        )
                     }
                  </Col>
               </Row>

               <Row>
                  <Col>
                     <button className="more__btn button" onClick={addMoreFeedbacks}>больше фотографий</button>
                  </Col>
               </Row>
            </Container>
            
         </section>
         );
      };


export default AppFeaturesSection;