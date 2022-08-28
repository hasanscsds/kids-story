import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";

function AppHeaderNavbarBottom () {

   function scrollToTop () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth' // for smoothly scrolling
      });
   };
   return (
      <Navbar className={`app__header__navbar__bottom w-100`}>
         <Link className="navbar-brand" to="/"><img loading="lazy" src={Logo} alt="logo"/></Link>
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="collapse__nav">
               <Navbar.Toggle className={`nav-item close__btn`} aria-controls="responsive-navbar-nav" onClick={scrollToTop}>
                  <i className="fas fa-times"></i>
               </Navbar.Toggle>
               
               <NavDropdown title="О нас" id="collasible-nav-dropdown">
                  <Link className="dropdown-item" to="/aboutus/aboutourcenter" onClick={scrollToTop}>О центре</Link>
                  <Link className="dropdown-item" to="/aboutus/feedbacks" onClick={scrollToTop}>Отзывы</Link>
                  <Link className="dropdown-item" to="/aboutus/documents" onClick={scrollToTop}>Документы</Link>
                  <Link className="dropdown-item" to="/aboutus/forparents" onClick={scrollToTop}>Родителям</Link>
                  <Link className="dropdown-item" to="/aboutus/foods" onClick={scrollToTop}>Питание</Link>
                  <Link className="dropdown-item" to="/aboutus/news" onClick={scrollToTop}>Новости</Link>
                  <Link className="dropdown-item" to="/aboutus/news/headline" onClick={scrollToTop}>Заголовок новости</Link>
                  <Link className="dropdown-item" to="/aboutus/tour" onClick={scrollToTop}>3D тур</Link>
               </NavDropdown>
               <NavDropdown title="Расписание" id="collasible-nav-dropdown">
                  <Link className="dropdown-item" to="/extraservicesweektable" onClick={scrollToTop}>Расписание основное</Link>
                  <Link className="dropdown-item" to="/extraservicesdaytable" onClick={scrollToTop}>Режим дня</Link>
                  <Link className="dropdown-item" to="/extraservicestable" onClick={scrollToTop}>Расписание дополнительных услуг</Link>
               </NavDropdown>
               <NavDropdown title="Программа" id="collasible-nav-dropdown">
                  <Link className="dropdown-item" to="/program" onClick={scrollToTop}>Программа</Link>
                  <Link className="dropdown-item" to="/servicespage" onClick={scrollToTop}>Дополнительные услуги</Link>
               </NavDropdown>

               <Link className="nav-item" to="/videosandimages" onClick={scrollToTop}>Фото и видео</Link>
               <Link className="nav-item" to="/community" onClick={scrollToTop}>Команда</Link>
               <Link className="nav-item" to="/contacts" onClick={scrollToTop}>Контакты</Link>
               <Link className="contact__number" to={"tel:+998755555555"}><i className="fa-solid fa-circle-phone"> +7 495 123 34 25</i><span>Заказать обратный звонок</span></Link>
               <span className="socials">
                  <a className="socials__link" href="vk.me/agvento" target="_blank"><i className="fab fa-vk"></i></a>
                  <a className="socials__link" href="vk.me/agvento" target="_blank"><i className="fab fa-telegram-plane"></i></a>
               </span>
               <a className="button" role="button" href="./">Записаться на экскурсию</a>
            </Nav>

         </Navbar.Collapse>
         <span className="socials">
            <a className="socials__link" href="vk.me/agvento" target="_blank"><i className="fab fa-vk"></i></a>
            <a className="socials__link" href="vk.me/agvento" target="_blank"><i className="fab fa-telegram-plane"></i></a>
         </span>
         <Navbar.Toggle className={'collapsed'} aria-controls="responsive-navbar-nav"><i className="fas fa-bars"></i></Navbar.Toggle>
         <Link className="button" role="button" to={"/"}>Записаться на экскурсию</Link>
      </Navbar>
   );
};


export default AppHeaderNavbarBottom;