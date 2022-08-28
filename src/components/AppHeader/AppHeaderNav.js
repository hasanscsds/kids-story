import React, {useState, useEffect} from 'react';
import {Container, Nav, Row, Col} from 'react-bootstrap';

function AppNav () {
   const [show, setShow] = useState(false);


   function handleScroll () {
      const position = window.pageYOffset;
      const  windowWidth = window.innerWidth;
      if(position>600 && windowWidth > 600){
         setShow(true)
      } else{
         setShow(false)
      }
   };
   
   useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <section className={`app__header__nav ${show? `d-flex`:`d-none`}`}>
         <Container fluid>
            <Row>
               <Col>
                  <Nav className={"nav__menu"} defaultActiveKey="/home" as="ul">
                     <Nav.Item aria-current="page"><Nav.Link to="./">О центре</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link to="./">Документы</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link to="./">Родителям</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link to="./">Питание</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link to="./">Новости</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link to="./">3D тур</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link to="./">Отзывы</Nav.Link></Nav.Item>
                  </Nav>
               </Col>
            </Row>
         </Container>
      </section>
   );
};


export default AppNav;