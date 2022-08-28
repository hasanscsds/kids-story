import React from 'react';
import SectionHeader from '../SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';

function AppServicesItem () {

   const extraServices=[
      {
         id: 1,
         servicesLocation: "Дома",
         servicesLabel: "Подъем, утренние гигиенические процедуры",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      {
         id: 2,
         servicesLocation: "В ДК",
         servicesLabel: "Прием, утренний фильтр, индивидуальная работа, самостоятельная деятельность, общение с родителями",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      {
         id: 3,
         servicesLocation: "Дома",
         servicesLabel: "Прогулка, возвращение с прогулки ",
         servicesTime: "06.30 (7.00) - 7.30",
      },
      
      ]

   return (
      <section className="table__section mb-4">
         <SectionHeader heading={"Режим дня"}/>
         
         <Container fluid>
            <Row>
               <Col>
                  <table className="day__table w-100">
                     <thead>
                        <tr>
                           <th></th>
                           <th>Виды деятельности </th>
                           <th>Время</th>
                        </tr>
                     </thead>
                     <tbody>
                        {extraServices.length>0 ? 
                        extraServices.map(item => (
                           <tr key={item.id}>
                              <th>{item.servicesLocation}</th>
                              <td>{item.servicesLabel}</td>
                              <td>{item.servicesTime}</td>
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