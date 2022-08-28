import React from 'react';
import SectionHeader from '../SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';

function AppServicesItem () {

   const extraServices=[
      {
         id: 1,
         servicesName: "Хореография с 2-3 лет",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 2,
         servicesName: "Заголовок услуги будет в 2 или 3 строчки",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 3,
         servicesName: "Рисование с 2-3 лет",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 4,
         servicesName: "Заголовок услуги будет в 2 или 3 строчки",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 5,
         servicesName: "Хореография с 2-3 лет",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 6,
         servicesName: "Рисование с 2-3 лет",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 7,
         servicesName: "Хореография с 2-3 лет",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 8,
         servicesName: "Заголовок услуги будет в 2 или 3 строчки",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 9,
         servicesName: "Заголовок услуги будет в 2 или 3 строчки Заголовок услуги будет в 2 или 3 строчки",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      {
         id: 10,
         servicesName: "Хореография с 2-3 лет",
         mondayTime: "10.00",
         tuesdayTime: "10.00",
         wednesdayTime: "10.00 - 15.00",
         thursdayTime: "10.00",
         fridayTime: "10.00",
         saturdayTime: "10.00",
         sundayTime: "10.00",
      },
      
      ]

   return (
      <section className="table__section mb-4">
         <SectionHeader heading={"Расписание дополнительных услуг"}/>
         <Container fluid>
            <Row>
               <Col>
                  <table className="w-100">
                     <thead>
                        <tr>
                           <th>Название услуги</th>
                           <th>Пн</th>
                           <th>Вт</th>
                           <th>Ср</th>
                           <th>Чт</th>
                           <th>Пт</th>
                           <th>Сб</th>
                           <th>Вс</th>
                        </tr>
                     </thead>
                     <tbody>
                        {extraServices.length>0 ? 
                        extraServices.map(user => (
                           <tr key={user.id}>
                              <th>{user.servicesName}</th>
                              <td>{user.mondayTime}</td>
                              <td>{user.tuesdayTime}</td>
                              <td>{user.wednesdayTime}</td>
                              <td>{user.thursdayTime}</td>
                              <td>{user.fridayTime}</td>
                              <td>{user.saturdayTime}</td>
                              <td>{user.sundayTime}</td>
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