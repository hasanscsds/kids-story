import React from 'react';
import {Modal} from 'react-bootstrap';

function AppFeaturesSection ({className, toggleModal, show, id}) {

   return (
      <div className={className}>
         <Modal className=""
            show={show}
            onHide={toggleModal}
            aria-labelledby="example-custom-modal-styling-title"
            centered
            dialogClassName="modal__content"
            closeButton="false"
            animation="true"
            backdrop="true"
            backdropClassName="backdrop"
            >
         <Modal.Header className="flex-column gap-2">
            <button className="close__btn" onClick={toggleModal}>
               <i class="fas fa-times"></i>
            </button>
            <h4 class="modal__title text-center">Ваша заявка отправлена!</h4>
            <p className="text-white text-center">Спасибо, мы с Вами свяжемся в ближайшее время</p>
         </Modal.Header>
      </Modal>
      </div>
   );
};


export default AppFeaturesSection;