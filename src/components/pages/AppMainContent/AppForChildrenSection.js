import React from 'react';
import SectionHeader from './SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';

function AppForChildrenSection () {

   const forChildren=[
      {
         id: 1,
         label: "Профилактика заболеваний опорно-двигательного аппарата",
         text: " Плавание эффективно развивает и укрепляет мышцы плечевого пояса, рук, ног, живота и спины. Это способствует формированию у ребенка правильной осанки и выносливости."
      },
      {
         id: 2,
         label: "Профилактика заболеваний опорно-двигательного аппарата",
         text: " Плавание эффективно развивает и укрепляет мышцы плечевого пояса, рук, ног, живота и спины. Это способствует формированию у ребенка правильной осанки и выносливости."
      },
      {
         id: 3,
         label: "Профилактика заболеваний опорно-двигательного аппарата",
         text: " Плавание эффективно развивает и укрепляет мышцы плечевого пояса, рук, ног, живота и спины. Это способствует формированию у ребенка правильной осанки и выносливости."
      },
      {
         id: 4,
         label: "Профилактика заболеваний опорно-двигательного аппарата",
         text: " Плавание эффективно развивает и укрепляет мышцы плечевого пояса, рук, ног, живота и спины. Это способствует формированию у ребенка правильной осанки и выносливости."
      }
      ]


   return (
      <section className="for__children__section  my-5">
         <SectionHeader heading={"Польза для детского здоровья"}/>
         <Container fluid>
            <Row>
               <Col className="for__children py-5">
                  {
                     forChildren.map((item, index)=>
                     <div className="for__children__item" key={item.id}>
                        <div className="for__children__details">
                           <h5 className="for__children__item__details__label">
                              Профилактика заболеваний опорно-двигательного аппарата
                           </h5>
                           <p className="for__children__item__details__text">
                              Плавание эффективно развивает и укрепляет мышцы плечевого пояса,
                              рук, ног, живота и спины. Это способствует формированию у ребенка
                              правильной осанки и выносливости.
                           </p>
                        </div>
                     </div>  
                     )
                  }
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default AppForChildrenSection;