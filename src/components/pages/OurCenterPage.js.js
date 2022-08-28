import React from 'react';
import AppAboutCenter from "./AppMainContent/AppAboutCenter/AppAboutCenterContent";
import AppFeaturesSection from './AppMainContent/AppFeatures/AppFeaturesSection';
import AppVideosSection from './AppMainContent/AppVideosSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import {Breadcrumb} from 'react-bootstrap';
import img from '../../images/Mask group.png'; 
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';

function OurCenterPage() {

   return (
      <div className={"app__our__center__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>О центре</Breadcrumb.Item>
         </Breadcrumb>
         <Container fluid>
            <Row>
               <Col className="about__center">
                  <Card className={`avatar__item d-flex wrap-nowrap border-0`}>
                     <Card.Img className="avatar__img" variant="left" src={img} />
                     <Card.Body className="avatar__details p-0">
                        <h4 className="avatar__position">{"Руководитель kids story"}</h4>
                        <h6 className="avatar__name">{"Журавлев Дмитрий Анатольевич"}</h6>
                        <p className="avatar__profession">{"Педагог - психолог"}</p>
                        <p className="avatar__experience">{"Стаж 11 лет"}</p>
                        <div class="socials">
                           <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fab fa-vk"></i></a>
                           <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane"></i></a>
                           <a className="socials__link" href={"/"} target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram-square"></i></a>
                        </div>
                     </Card.Body>
                  </Card>
                  <AppAboutCenter/>
               </Col>
            </Row>
         </Container>
         <AppVideosSection heading={"Наш сад в видео"}/>
         <AppFeaturesSection className={"app__features__section"}/>
         <AppBannerFormsSection className={"app__third__banner__section"}/>
      </div>
   );
}
export default OurCenterPage;