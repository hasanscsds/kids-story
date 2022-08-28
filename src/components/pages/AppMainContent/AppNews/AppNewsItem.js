import React from 'react';
import Card from 'react-bootstrap/Card';

function AppNewsItem ({item}) {

   return (
      <Card className="news__item border-0" key={item.id}>
         <Card.Img className="news__item__bg" src={`${item.newsImg}`} alt="img" />
         <Card.Body className="news__item__details p-0">
            <span className="news__item__details__date">Дата публикации: <date> {item.newsDate}</date></span>
            <h5 className="news__item__details__label">{item.newsLabel}</h5>
            <p className="news__item__details__text">{item.newsText}</p>
            <button href="/" className="source__btn button w-100">подробнее</button>
            <p className="news__item__details__text news__full__text">{item.newsFullText}</p>
         </Card.Body>
      </Card>
   );
   };

export default AppNewsItem;