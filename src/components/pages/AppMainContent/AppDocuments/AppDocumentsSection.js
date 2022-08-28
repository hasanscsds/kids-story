import React from 'react';
import SectionHeader from '../SomeParts/SectionHeader';
import img from '../../../../images/icons/file-download.png';
import {Container, Row, Col} from 'react-bootstrap';


function AppDocumentsSection () {
   return (
      <section className="documents__section my-5">
         <SectionHeader heading={"Документы"}/>

         <Container fluid>
               <Row>
                  <Col>
                     <ul className="documents p-0">
                        <li className="documents__item item">
                           <a href="../../images/Resume Kholdarov Khasan-.pdf" download="file">
                              <img className="documents__img" src={img} alt="img"/>
                              <h5 className="documents__name">Заголовок документы для загрузки 
                              будет в 2 строчки</h5>
                           </a>
                        </li>
                        <li className="documents__item item">
                           <a href="../../images/Resume Kholdarov Khasan-.pdf" download="file">
                              <img className="documents__img" src={img} alt="img"/>
                              <h5 className="documents__name">Документ</h5>
                           </a>
                        </li>
                        <li className="documents__item item">
                           <a href="../../images/Resume Kholdarov Khasan-.pdf" download="file">
                              <img className="documents__img" src={img} alt="img"/>
                              <h5 className="documents__name">Заголовок документы для загрузки</h5>
                           </a>
                        </li>
                        <li className="documents__item item">
                           <a href="../../images/Resume Kholdarov Khasan-.pdf" download="file">
                              <img className="documents__img" src={img} alt="img"/>
                              <h5 className="documents__name">Документ</h5>
                           </a>
                        </li>
                     </ul>
                  </Col>
               </Row>
            </Container>
         </section>
      );
   };

export default AppDocumentsSection;