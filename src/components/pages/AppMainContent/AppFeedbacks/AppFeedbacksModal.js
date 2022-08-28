import React from 'react';
import avatarIcon from "../../../../images/icons/Grou.png";
import {Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";

function AppFeaturesSection ({toggleModal, show, item}) {

   return (
         <Modal className=""
            show={show}
            onHide={toggleModal}
            aria-labelledby="example-custom-modal-styling-title"
            dialogClassName="modal__content"
            closeButton="false"
            animation="true"
            backdrop="true"
            centered
            backdropClassName="backdrop"
            >
            <Modal.Header>
               <h4 class="modal__title">Подробнее о педагоге</h4>
               <button className="close__btn" onClick={toggleModal}>
                  <i class="fas fa-times"></i>
               </button>
            </Modal.Header>
         
            <Modal.Body className="feedbacks__modal__content p-5">
               <Link className="avatar__details" to="./aboutcenterpage">
                  <span class="feedbacks__avatar">
                     <img src={`${item.avatarImg? item.avatarImg:avatarIcon}`} alt="av"/>
                  </span>
                  <span className="avatar__text">
                     <h5 className="avatar__name">{item.feedbacksOwnerName}</h5>
                     <span className="avatar__location">{item.feedbacksOwnerLocation}</span>
                  </span>
               </Link>
               <p className="section__text w-100">Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)
                  Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)
                  Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)

                  Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)
                  </p>
               <button className="source__btn button">источник</button>
            </Modal.Body>
         </Modal>
      );
   };


export default AppFeaturesSection;