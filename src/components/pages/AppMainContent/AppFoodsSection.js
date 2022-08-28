import React from 'react';
import SectionHeader from './SomeParts/SectionHeader';
import foods1 from '../../../images/foods1.png';
import foods2 from '../../../images/foods2.png';
import foods3 from '../../../images/foods3.png';
import {Container, Row, Col} from 'react-bootstrap';

function AppFoodsSection () {
   const foods=[
      {
         id: 1,
         time: "1 завтрак",
         img: foods1,
         text: { 
            label: "Блюдо 1",
            weight: "250 гр."
         },
      },
      {
         id: 2,
         time: "2 завтрак",
         img: foods2,
         text: { 
            label: "Блюдо 1",
            weight: "250 гр."
         },
      },
      {
         id: 3,
         time: "обед",
         img: foods3,
         text: { 
            label: "Блюдо 1",
            weight: "250 гр."
         },
      },
      {
         id: 4,
         time: "полдник",
         img: foods1,
         text: 
            { 
               label: "Блюдо 1",
               weight: "250 гр."
            },
      },
      {
         id: 5,
         time: "ужин",
         img: foods2,
         text: { 
            label: "Блюдо 1",
            weight: "250 гр."
         },
      },
      ]

   return (
      <section className={"app__foods__section"}>
         <SectionHeader heading={"Питание"}/>
         <Container fluid>
            <Row  className="foods">
               <Col md="auto" className="foods__list__box">
                     {
                        foods.map((item, index)=>
                        <div className={"foods__item"} key={item.id}>
                           <h6 className={"foods__time"}>{item.time}</h6>
                           <ul className={"foods__list p-0"}>
                              <li className={"foods__list__item"}>
                                 <span className={'foods__label'}>{item.text.label}</span>
                                 <span className={'foods__underline'}></span>
                                 <span className={'foods__weight'}>{item.text.weight}</span>
                              </li>
                              <li className={"foods__list__item"}>
                                 <span className={'foods__label'}>{item.text.label}</span>
                                 <span className={'foods__weight'}>{item.text.weight}</span>
                              </li>
                              <li className={"foods__list__item"}>
                                 <span className={'foods__label'}>{item.text.label}</span>
                                 <span className={'foods__weight'}>{item.text.weight}</span>
                              </li>
                           </ul>
                        </div>
                        )
                     }
               </Col>
               <Col md="auto" className="foods__images__box">
                  {
                     foods.map((item, index)=>
                     <div className="foods__images__item" key={item.id}>
                        <img src={item.img} alt="img" />
                     </div>
                     )
                  }
               </Col>
            </Row>
         </Container>
      </section>
   );
};


export default AppFoodsSection;