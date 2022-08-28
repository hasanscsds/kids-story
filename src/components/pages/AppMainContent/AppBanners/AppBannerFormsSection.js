import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function AppBannerForms ({className}) {
   return (
         <section className={`banner__section ${className}`}>
            <div className="bg__image__wrapper__second"></div>
            <div className="bg__image__wrapper__first"></div>
            <Container fluid>
               <Row>
                  <Col className="banner__form__content">
                     <h2 className="banner__form__content__label form__label">Есть вопросы? Получите 
                     бесплатную консультацию</h2>
                     <p className="banner__form__content__text form__text">Оставьте телефон и мы перезвоним 
                     и расскажем все подробности о филиале</p>
                     <form action="" className="banner__form__content__details">
                        <input className="" type="number" pattern="(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})" placeholder="+998 ( _ _ ) - _  _  _ - _  _ - _  _" required/>
                        <input className="" type="submit" value="отправить"/>
                        <label className="control control-radio">
                           <input type="radio" name="radio"/>
                           <div className="control_indicator"></div>
                                 Я принимаю условия<br/> 
                                 пользовательского соглашения
                        </label>
                     </form>
                  </Col>
               </Row>
            </Container>
         </section>
         );
      };


export default AppBannerForms;