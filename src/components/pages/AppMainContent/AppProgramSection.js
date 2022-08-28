import React from 'react';
import SectionHeader from './SomeParts/SectionHeader';
import img1 from "../../../images/Mask groupw.png";
import img2 from "../../../images/Mask group (1).png";
import img3 from "../../../images/Mask group (2).png";
import {Container, Row, Col} from 'react-bootstrap';


function AppProgramSection () {
   const program=[
      {
         id: 1,
         img: img1,
         label: "Группа (2-3 года)",
         text: "Специалисты, работающие в этой группе (воспитатели, педагог по английскому языку), страница с фото и текстами в шахматном порядке. Что ждет ребенка (режим пребывания). Сколько человек в группе. Какое питание. Какие проводятся занятия (расписание). Физ упражнения. Как проходит день.Фото специалиста, кто оказывает услугу.",
      },
      {
         id: 2,
         img: img2,
         label: "Группа (3-5 года)",
         text: "Специалисты, работающие в этой группе (воспитатели, педагог по английскому языку), страница с фото и текстами в шахматном порядке. Что ждет ребенка (режим пребывания). Сколько человек в группе. Какое питание. Какие проводятся занятия (расписание). Физ упражнения. Как проходит день.Фото специалиста, кто оказывает услугу.",
      },
      {
         id: 3,
         img: img3,
         label: "Группа (5-7 года)",
         text: "Специалисты, работающие в этой группе (воспитатели, педагог по английскому языку), страница с фото и текстами в шахматном порядке. Что ждет ребенка (режим пребывания). Сколько человек в группе. Какое питание. Какие проводятся занятия (расписание). Физ упражнения. Как проходит день.Фото специалиста, кто оказывает услугу.",
      }
      ]

   return (
      <section className={"app__program__section"}>
         <SectionHeader heading={"Программа"}/>

         <Container fluid>
            <Row>
               <Col className="program">
                  {
                     program.map((item, index)=>
                        <div className="program__item" key={item.id}>
                           <div className="program__item__img">
                              <img src={item.img} alt="img" />
                           </div>
                           <div className="program__item__details">
                              <h4 className="program__item__details__label">{item.label}</h4>
                              <p className="program__item__details__text">{item.text}</p>
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


export default AppProgramSection;