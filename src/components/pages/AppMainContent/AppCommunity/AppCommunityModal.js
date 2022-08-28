import React from 'react';
import AppAboutCenter from "../../AppMainContent/AppAboutCenter/AppAboutCenterContent";
import Card from 'react-bootstrap/Card';
import img from "../../../../images/Mask group.png";
import {Modal} from 'react-bootstrap';

function AppFeaturesSection ({className, toggleModal, show, item}) {

   return (
      <div className={className}>
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
         
         <Modal.Body className='about__center'>
               <Card className={`avatar__item border-0 w-100 ${className}`}onClick={toggleModal}> 
                  <Card.Img className="avatar__img" variant="top" src={item.avatarImg} />
                  <Card.Body className="avatar__details p-0">
                     <h4 className="avatar__position">{item.avatarPosition}</h4>
                     <h6 className="avatar__name">{item.avatarName}</h6>
                     <p className="avatar__profession">{item.avatarProfession}</p>
                     <p className="avatar__experience">{item.avatarExperience}</p>
                     <div class="socials d-flex">
                        <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fab fa-vk"></i></a>
                        <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane"></i></a>
                        <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram-square"></i></a>
                     </div>
                  </Card.Body>
               </Card>         
            <AppAboutCenter/>
         </Modal.Body>
      </Modal>
      </div>
   );
};


export default AppFeaturesSection;