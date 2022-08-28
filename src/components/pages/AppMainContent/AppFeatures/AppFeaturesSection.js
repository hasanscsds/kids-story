import React, {useState, useEffect} from 'react';
import data from "../../../JSON/featuresData.json";
import FeaturesItem from './FeaturesItem';
import {Container, Row, Col} from 'react-bootstrap';

function AppFeaturesSection ({className}) {
   const [features, setFeatures]=useState([])


   useEffect(()=>{
      setFeatures(data.filter((item, index)=>item.id >0 && item.id < 10))
   },[])
   return (
         <section className={`my-5 ${className}`}>
            <Container fluid>
               <Row>
                  <Col className="features">
                     {
                        features.map((item, index)=>
                           <FeaturesItem item={item} key={item.id}/>
                        )
                     }
                  </Col>
               </Row>
            </Container>
         </section>
         );
      };


export default AppFeaturesSection;