import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function AppAboutCenterSection () {

return (
<Container fluid>
   <Row>
      <Col className="about__details">
         <p className="about__text section__text">Наша задача — сделать так, чтобы каждый день в Kids story был счастливым.</p>
         
         <ul class="about__list">
               <li className="about__list__item">Английский детский клуб. Для детей с 2 до 7 лет. Погружение в языковую среду, собственная кухня, охраняемая огороженная территория, медицинский кабинет, соляная пещера.</li>
               <li className="about__list__item">Дополнительные услуги. Для детей с 2 до 18 лет. Развивающие студии, творческие мастерские, спортивные секции.</li>
               <li className="about__list__item">Kids story - «ежедневное развитие детей на 360 градусов».</li>
         </ul>
      </Col>
   </Row>
</Container>
);
};


export default AppAboutCenterSection;