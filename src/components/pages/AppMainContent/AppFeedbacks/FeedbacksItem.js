import React, {useState} from 'react';
import { Link } from "react-router-dom";
import avatarIcon from "../../../../images/icons/Grou.png";
import Card from 'react-bootstrap/Card';
import AppFeedbacksModal from "./AppFeedbacksModal";


function FeedbacksItem ({item}) {
   const [show, setShow] = useState(false);

   function toggleModal (){
      setShow(!show);
   } 
   return (
      <Card className="feedbacks__item border-0" key={item.id} onClick={toggleModal}>
         <Link className="avatar__details" to="./aboutcenterpage">
            <span class="feedbacks__avatar">
               <img src={`${item.avatarImg? item.avatarImg:avatarIcon}`} alt=""/>
            </span>
            <span className="avatar__text">
               <h5 className="avatar__name">{item.feedbacksOwnerName}</h5>
               <span className="avatar__location">{item.feedbacksOwnerLocation}</span>
            </span>
         </Link>
         <Card.Body className="d-flex flex-wrap justify-content-between m-0 p-0 feedbacks__content">
            <Card.Text className="section__text">Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)</Card.Text>
            <Link className="link__btn" to="#feedbacks__modal">Прочитать отзыв</Link>
            <Link className="source__btn button" to="#">источник</Link>
         </Card.Body>
         <AppFeedbacksModal toggleModal={toggleModal} show={show} item={item}/>
      </Card>
   );
};

export default FeedbacksItem;