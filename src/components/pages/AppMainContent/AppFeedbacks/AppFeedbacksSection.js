/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import data from "../../../JSON/profileData.json";
import SectionHeader from '../SomeParts/SectionHeader';
import FeedbacksItem from './FeedbacksItem';
import {Container, Row, Col} from 'react-bootstrap';



function AppFeaturesSection ({className}) {
   const [avatars, setAvatars]=useState([])
   const [moreFeedbacks, setMoreFeedbacks]=useState(5);


   useEffect(()=>{
      setAvatars(data.filter((item, index)=>item.id >0 && item.id < moreFeedbacks))
   },[moreFeedbacks])


   function addMoreFeedbacks (){
      let newFeedbacks = moreFeedbacks + 4;
      setMoreFeedbacks(newFeedbacks)
   }

   return (
      <section className={className}>
         <SectionHeader heading={"Отзывы"}/>
         <Container fluid>
            <Row>
               <Col className="feedbacks">
                  {
                     avatars.map((item, index)=>
                        <FeedbacksItem item={item}/>
                     )
                  }
               </Col>
            </Row>
            <Row>
               <Col>
                  <button className="more__btn button" onClick={addMoreFeedbacks}>смотреть еще отзывы</button>
               </Col>
            </Row>
         </Container>
         
      </section>
   );
};


export default AppFeaturesSection;