import React, {useState} from 'react';
import img1 from "../../../../images/Mask groupw.png";
import img2 from "../../../../images/Mask group (1).png";
import img3 from "../../../../images/Mask group (2).png";
import SectionHeader from '../SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';


function AppAboutOurCenter () {
const [text] = useState("Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми. Собственный бассейна с комфортной температурой, современными, безопасными для здоровья ребенка методами очищения и профессиональным тренером — все это найдется в Тридевятом царстве в Новогорске.")

const aboutCenter=[
   {
      id: 1,
      label: "Раздел",
      img: img1,
      text: "Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми."
   },
   {
      id: 2,
      label: "Раздел",
      img: img2,
      text: "Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми."
   },
   {
      id: 3,
      label: "Раздел",
      img: img3,
      text: "Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми."
   },
   {
      id: 4,
      label: "Раздел",
      img: "",
      text: "Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми."
   },
   {
      id: 5,
      label: "Раздел",
      img: "",
      text: "Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми."
   },
   {
      id: 6,
      label: "Раздел",
      img: "",
      text: "Согласно результатам исследования австралийских ученых из Griffith Institute for Educational Research, дети, которые постоянно занимаются плаванием, растут более умными, физически и эмоционально здоровыми."
   }
   ]


   return (
      <section className="about__our__center__section my-5">
         <SectionHeader heading={"О нашем центре"} text={text}/>

         <Container fluid>
            <Row>
               <Col className="about__our__center flex-wrap">
                  {
                     aboutCenter.map((item, index)=>
                     <li className="about__our__center__item" key={item.id}>
                        <img src={item.img? item.img: ""} alt="" />
                        <div className="about__our__center__item__details">
                           <h5 className="about__our__center__item__details__label">{item.label} {item.id}</h5>
                           <p className="about__our__center__item__details__text">{item.text}</p>
                        </div>
                     </li>
                     )
                  }
               </Col>
            </Row>
         </Container>
      </section>

   );
};


export default AppAboutOurCenter;