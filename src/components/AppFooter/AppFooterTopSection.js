import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

function AppFooterTopSection () {
   return (
      <Container fluid>
         <Row className="app__footer__top">
            <Col md="auto" className="app__footer__top__widget">
            <ul className="contacts">
               <li className="contacts__item">
                  {/* ***** Logo Start *****  */}
                  <Link className="navbar-brand" to="/"><img loading="lazy" src={Logo} alt="logo"/></Link>
                  {/* ***** Logo End ***** */}
               </li>
               <li className="contacts__item">
                  <a className="contact__number" href="tel:+998755555555">
                     <i className="fa-solid fa-circle-phone"> +7 495 123 34 25</i>
                     <span>dir@kidsstory.life</span>
                  </a>
               </li>
               <li className="contacts__item">
                  <a className="button" role="button" href="./">МЕНЮ САЙТА</a>
               </li>
               <li className="contacts__item">
                  <a className="address__link" href="#location">Москва, ул. Муравская д.38, к.1   ЖК Мир Митино  
                     <span> М. Пятницкое шоссе</span>
                  </a>
               </li>
               <li className="contacts__item socials">
                  <a className="socials__link" href="vk.me/agvento" target="_blank">
                     <i className="fab fa-vk"></i>
                  </a>
                  <a className="socials__link" href="vk.me/agvento" target="_blank">
                     <i className="fab fa-telegram-plane"></i>
                  </a>
               </li>
            </ul>
            </Col>
            <Col md="auto" className="app__footer__top__widget">
            <h6 className="app__footer__top__widget__label">О нас</h6>
            <ul className="app__footer__top__widget__list">
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/aboutourcenter">
                     О центре
                  </Link>
               </li>
               <li className="app__footer__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/feedbacks">
                     Отзывы
                  </Link>
               </li>
               <li className="app__footer__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/documents">
                     Документы
                  </Link>
               </li>
               <li className="app__footer__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/forparents">
                     Родителям
                  </Link>
               </li>
               <li className="app__footer__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/foods">
                     Питание
                  </Link>
               </li>
               <li className="app__footer__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/news">
                     Новости
                  </Link>
               </li>
               
               <li className="app__footer__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/aboutus/tour">
                     3D тур
                  </Link>
               </li>
            </ul>
            </Col>
            <Col md="auto" className="app__footer__top__widget">
            <h6 className="app__footer__top__widget__label">Расписание</h6>
            <ul className="app__footer__top__widget__list">
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="./">
                     Расписание основное
                  </Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="./">
                     Дополнительные услуги
                  </Link>
               </li>
            </ul>
            </Col>
            <Col md="auto" className="app__footer__top__widget">
            <h6 className="app__footer__top__widget__label">Программа</h6>
            <ul className="app__footer__top__widget__list">
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/program">
                     Группа (2-3 года)
                  </Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/program">
                     Группа (3-5 лет)
                  </Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/program">
                     Группа (5-7 лет)
                  </Link>
               </li>
            </ul>
            </Col>
            <Col md="auto" className="app__footer__top__widget">
            <h6 className="app__footer__top__widget__label">Фото и видео</h6>
               <ul className="app__footer__top__widget__list">
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//videosandimages"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//videosandimages"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//videosandimages"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//videosandimages"></Link>
               </li>
            </ul>
            </Col>
            <Col md="auto" className="app__footer__top__widget">
            <h6 className="app__footer__top__widget__label">Команда</h6>
            <ul className="app__footer__top__widget__list">
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//community"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//community"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//community"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="//community"></Link>
               </li>
            </ul>
            </Col>
            <Col md="auto" className="app__footer__top__widget">
            <h6 className="app__footer__top__widget__label">Контакты</h6>
            <ul className="app__footer__top__widget__list">
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/contacts"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/contacts"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/contacts"></Link>
               </li>
               <li className="app__footer__top__widget__list__item">
                  <Link className="app__footer__top__widget__list__item__link" to="/contacts"></Link>
               </li>
            </ul>
            </Col>
         </Row>
      </Container>
      );
   };


export default AppFooterTopSection;