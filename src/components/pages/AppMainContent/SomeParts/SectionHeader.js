import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function SectionHeader ({heading, text}) {
   return (
      <Container fluid>
         <Row>
            <Col class={`section__header`}>
               <h2 class="section__heading">
                  {heading}
               </h2>
               <p class="section__text">{text}</p>
            </Col>
         </Row>
      </Container>
   );
};


export default SectionHeader;