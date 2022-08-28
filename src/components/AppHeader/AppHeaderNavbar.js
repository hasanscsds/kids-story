import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AppHeaderNavbarTop from './AppHeaderNavbarTop';
import AppHeaderNavbarBottom from './AppHeaderNavbarBottom';

function AppNavigation () {
   
   return (
      <Container fluid>
         <Row>
            <Col>
               <AppHeaderNavbarTop/>
            </Col>
         </Row>
         <Row>
            <Col>
               <AppHeaderNavbarBottom/>  
            </Col>
         </Row>
      </Container>
   );
};


export default AppNavigation;