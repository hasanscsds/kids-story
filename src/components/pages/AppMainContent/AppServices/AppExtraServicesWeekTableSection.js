import React from 'react';
import SectionHeader from '../SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';

function AppServicesItem () {

   const extraServices=[
      {
         id: 1,
         serviceDay: "Пн",
         servicesLabel: "Наблюдение психолога ",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      {
         id: 2,
         serviceDay: "Вт",
         servicesLabel: "Развитие речи",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      {
         id: 3,
         serviceDay: "Ср",
         servicesLabel: "Английский язык",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      {
         id: 4,
         serviceDay: "Чт",
         servicesLabel: "Развитие речи",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      {
         id: 5,
         serviceDay: "Пт",
         servicesLabel: "Английский язык",
         servicesTime: "06.30 (7.00) - 7.30",
      }
      
      ]

   return (
      <section className="table__section mb-4">
         <SectionHeader heading={"Расписание основное"}/>
         
         <Container fluid>
            <Row>
               <Col>
                  <table className="week__table w-100">
                     <thead>
                        <tr>
                           <th>День недели</th>
                           <th>Время</th>
                           <th>Наблюдение психолога </th>
                        </tr>
                     </thead>
                     <tbody>
                        {extraServices.length>0 ? 
                        extraServices.map(item => (
                           <tr key={item.id}>
                              <th>{item.serviceDay}</th>
                              <td>{item.servicesTime}</td>
                              <td>{item.servicesLabel}</td>
                           </tr>
                           )):(
                           <tr>
                              <td colSpan={3}>No users</td>
                           </tr>
                        )} 
                     </tbody>
                  </table>
               </Col>
            </Row>
         </Container>
      </section>
      );
   };

export default AppServicesItem;