import React, {useState, useEffect} from 'react';
import data from "../../../JSON/profileData.json";
import SectionHeader from '../SomeParts/SectionHeader';
import AppAvatarItem from './AppAvatarItem';
import {Container, Row, Col} from 'react-bootstrap';

function AppFeaturesSection () {
   const [avatars, setAvatars]=useState([])


   useEffect(()=>{
      setAvatars(data)
   },[])
   

   return (
      <section className={`app__community__section my-5`}>
         <SectionHeader heading={"Наша команда"}/>

         <Container fluid>
            <Row>
               <Col className="community">
                  {
                     avatars.map((item, index)=>
                        <AppAvatarItem item={item} className={"itemClass"}/>
                     )
                  }
               </Col>
            </Row>
         </Container>
      </section>
      );
   };


export default AppFeaturesSection;