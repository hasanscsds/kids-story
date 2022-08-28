import React, {useState} from 'react';
import SectionHeader from './SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';
import AppContactsModal from "./AppContactsModal";

function AppTourSection(){
   const [show, setShow] = useState(false);

   function toggleModal (){
      setShow(!show);
   } 
   return(
      <section className="app__tour__section">
         <SectionHeader heading={"Контакты"}/>

         <Container fluid>
            <Row className="justify-content-md-center">
               <Col className="banner__form__content contacts__form" md="auto">
                  <h2 className="form__label">Запишитесь на персональную экскурсию</h2>
                  <p className="form__text">Заполните форму и посмотрите детский сад вживую в удобное для вас время</p>
                  <form action="" className="banner__form__content__details">
                     <input className="" type="text" placeholder="Ваше имя"/>
                     <input className="" type="email" placeholder="Ваш e-mail"/>
                     <input className="" type="number" placeholder="+998 ( _ _ ) - _  _  _ - _  _ - _  _" />
                     <label className="control control-radio">
                        <input type="radio" name="radio"/>
                        <div className="control_indicator"></div>
                              Я принимаю условия<br/> 
                              пользовательского соглашения
                     </label>
                     <textarea name="" id="" cols="10" rows="5" className="textarea w-100" placeholder="Комментарий"></textarea>
                     <input className="" type="submit" value="записаться" onClick={toggleModal}/>
                  </form>   
               </Col>
            </Row>
         </Container>

         <AppContactsModal toggleModal={toggleModal} show={show}/>
      </section>
   );
}
export default AppTourSection;