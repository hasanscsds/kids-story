import React from 'react';
import AppFeaturesSection from './AppMainContent/AppFeatures/AppFeaturesSection';
import AppServicesSection from './AppMainContent/AppServices/AppServicesSection';
import {Breadcrumb} from 'react-bootstrap';


function ServicesPage() {
   return (
      <div className={"app__services__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item  active>Дополнительные услуги</Breadcrumb.Item>
         </Breadcrumb>
         <AppServicesSection/>
         <AppFeaturesSection/>
      </div>
   );
}
export default ServicesPage;