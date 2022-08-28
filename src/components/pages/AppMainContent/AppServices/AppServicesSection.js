import React, {useState, useEffect} from 'react';
import data from "../../../JSON/servicesData.json"
import { Link } from "react-router-dom";
import SectionHeader from '../SomeParts/SectionHeader';
import AppServicesItem from "./AppServicesItem";
import {Container, Row, Col} from 'react-bootstrap';

function AppServices () {
const [services, setServices]=useState([])

useEffect(()=>{
setServices(data)
},[])

   return (
      <section className={`app__services__section`}>
         <SectionHeader heading={"Дополнительные услуги"}/>

         <Container fluid>
            <Row>
               <Col className={"services"}>
                  {
                     services.map((item, index)=>
                        <Link className='services__item' to={`/servicespage/`+ item.id} key={item.id}>
                           <AppServicesItem item={item}/>
                        </Link>
                     )
                  }
               </Col>
            </Row>
         </Container>
      </section>
   );
   };

export default AppServices;