import React, {useState, useEffect} from 'react';
import data from "../../../JSON/servicesData.json"
import {useParams} from "react-router-dom";
import AppServicesItem from "./AppServicesItem";
import {Container, Row, Col} from 'react-bootstrap';

function AppServicesItemSection () {
   const [services, setServices]=useState([])
   const {id}= useParams();


   useEffect(()=>{
      setServices(data.filter((item)=>item.id==id))
   },[id])

   return (
      <section className={"app__services__item__section"}>
         <Container fluid>
            <Row>
               <Col className={"services"}>
                  {
                     services.map((item, index)=>
                        <AppServicesItem item={item} key={item.id}/>
                     )
                  }
               </Col>
            </Row>
            <Row>
               <Col>
                  <button className={"button text-uppercase my-5"}>записаться на первый урок</button>
               </Col>
            </Row>
         </Container>
      </section>
   );
};


export default AppServicesItemSection;