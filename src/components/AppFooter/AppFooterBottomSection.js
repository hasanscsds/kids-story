import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';


function AppFooterBottomSection () {

   return (
      <Container fluid className="app__footer__bottom">
         <Row>
            <Col>
               <Link className="copyrights text-decoration-underline"
               to="https://t.me/khasans_code">
               Copyrights: Kids Story <span>{new Date().getFullYear()}</span> <br/> by khasans__code</Link>
            </Col>
         </Row>
      </Container>
   );
};


export default AppFooterBottomSection;