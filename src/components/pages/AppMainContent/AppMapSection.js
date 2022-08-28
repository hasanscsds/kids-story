import React, { useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';

function GoogleMapSection(){
   useEffect(()=>{
      const ifameData=document.getElementById("iframeId")
      const lat=41.320105;
      const lon=69.301222;
      ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
   })
   return(
      <section className="app__map__section my-4">
         <Container fluid>
            <Row>
               <Col className="p-0">
                  <iframe title="map" id="iframeId" height="500px" width="100%"></iframe>
               </Col>
            </Row>
         </Container>
      </section>
   );
}
export default GoogleMapSection;