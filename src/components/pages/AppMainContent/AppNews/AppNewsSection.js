import React, {useState, useEffect} from 'react';
import data from "../../../JSON/newsData.json"
import { Link } from "react-router-dom";
import SectionHeader from '../SomeParts/SectionHeader';
import AppNewsItem from './AppNewsItem';
import {Container, Row, Col} from 'react-bootstrap';

function AppNews () {
const [news, setNews]=useState([])
const [moreNews, setMoreNews]= useState(6);

useEffect(()=>{
   setNews(data)
},[])


function addMoreNews (){
   let addedNews = moreNews + 3;
   setMoreNews(addedNews)
}

   return (
         <section className={`app__news__section`}>
            <SectionHeader heading={"Новости"}/>
            <Container fluid>
               <Row>
                  <Col className="news">
                     {
                        news.filter((item, index)=>item.id >0 && item.id <= moreNews).map((item, index)=>
                           <Link className="news__item" to={`/aboutus/news/`+ item.id}>
                              <AppNewsItem item={item}/>
                           </Link>
                        )
                     }
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <button className="more__btn button" onClick={addMoreNews}>смотреть еще отзывы</button>
                  </Col>
               </Row>
            </Container>
      </section>
   );
   };

export default AppNews;