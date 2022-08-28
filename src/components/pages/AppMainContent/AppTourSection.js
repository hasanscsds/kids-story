import React from "react";
import tourVideo from "../../../videos/video_preview_h264.mp4";
import SectionHeader from './SomeParts/SectionHeader';
import {Container, Row, Col} from 'react-bootstrap';

function AppTourSection(){
   return(
      <section className="app__tour__section">
         <SectionHeader heading={"3D тур"}/>
         
         <Container fluid>
            <Row>
               <Col className="video__tour">
                  <video autoplay loop>
                     <source src={tourVideo} type="video/mp4"/>
                  </video>
               </Col>
            </Row>
         </Container>
      </section>
   );
}
export default AppTourSection;