import React, {useState, useEffect} from 'react';
import data from "../../../JSON/featuresData.json";
import SectionHeader from '../SomeParts/SectionHeader';
import FeaturesItem from './FeaturesItem';
import {Container, Row, Col} from 'react-bootstrap';


function AppAdvantagesSection () {
   const [features, setFeatures]=useState([])


   useEffect(()=>{
      setFeatures(data.filter((item, index)=>item.id >9 && item.id < 16))
   },[])

   return (
      <section className={`app__advantages__section my-5`}>
         <SectionHeader heading={"Преимущества"} text={"Наша авторская программа ведётся на русском и английском языках и состоит из увлекательных мероприятий"}/>
            
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


export default AppAdvantagesSection;