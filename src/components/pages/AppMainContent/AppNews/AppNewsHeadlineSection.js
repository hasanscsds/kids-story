import React, {useState, useEffect} from 'react';
import data from "../../../JSON/newsData.json"
import {useParams} from "react-router-dom";
import AppNewsItem from './AppNewsItem';
import newsImg from "../../../../images/newsimg.png";
import Slider from "react-slick";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
function AppNewsHeadline () {
const [news, setNews]=useState([])
const {id}= useParams();

useEffect(()=>{
   setNews(data)
},[])

const SlickArrowLeft = ({onClick}) => (
   <span className="arrow arrow__left" onClick={onClick}>
      <i class="fa-solid fa-chevron-left"></i>
   </span>
);

const SlickArrowRight = ({onClick}) => (
   <span className="arrow arrow__right" onClick={onClick}>
      <i class="fa-solid fa-chevron-right"></i>
   </span>
);

const settings = {
   dots: false,
   infinite: true,
   lazyLoad: true,
   touchMove: true,
   useCSS: true,
   speed: 1000,
   focusOnSelect: true,
   adaptiveHeight: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   prevArrow: <SlickArrowLeft />,
   nextArrow: <SlickArrowRight />,
   responsive: [
      {
         breakpoint: 600,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 1
         }
      }
   ]
}
   return (
         <section className={`app__news__headline__section`}>
            <Container fluid>
               <Row>
                  <Col className="news__headline">
                     {
                        news.filter((item, index)=>item.id==id).map((item, index)=>
                           <AppNewsItem item={item}/>
                        )
                     }
                  </Col>
               </Row>
               <Row>
                  <Col className="news__headline">
                     <div className="news__item">
                        <div className="news__item__details">
                           <h5 className="news__item__details__label">Заголовок для блока новостей</h5>
                           <p className="news__item__details__text news__full__text">Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.

                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              </p>
                        </div>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col className="news__headline">
                     <div className="news__item d-flex">
                        <img className="news__item__bg" src={newsImg} alt="img" />
                        <div className="news__item__details">
                           <h5 className="news__item__details__label">Заголовок для блока новостей</h5>
                           <p className="news__item__details__text news__full__text">Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.

                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              </p>
                        </div>
                        <div className="news__item__details w-100">
                           <p className="news__item__details__text news__full__text">Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.

                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
                              </p>
                        </div>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col className="socials__box">
                     <h4 className="socials__label">ПОДЕЛИТЬСЯ НОВОСТЬЮ:</h4>
                     <ul className="socials p-0">
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                        </li>
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                        </li>
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                        </li>
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-youtube"></i></Link>
                        </li>
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-pinterest"></i></Link>
                        </li>
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-vk"></i></Link>
                        </li>
                        <li className="socials__item">
                           <Link className="socials__link" to="vk.me/agvento" target="_blank"><i className="fa-brands fa-telegram"></i></Link>
                        </li>
                     </ul>
                  </Col>
               </Row>
               <Row>
                  <Col className="news__slider">
                     <Slider {...settings} className="news__slider">
                        {
                           news.map((item, index)=>
                              <div  className="news__item__details px-5 my-4" key={item.id}>
                                 <h5 className="news__item__details__label">{item.newsLabel}</h5>
                                 <p className="news__item__details__text m-0">{item.newsText}</p>
                              </div>
                           )
                        }
                     </Slider>
                  </Col>
               </Row>
            </Container>      
         </section>
      );
   };

export default AppNewsHeadline;