import React from 'react';
import AppServicesItemSection from './AppMainContent/AppServices/AppServicesItemSection';
import AppAboutOurCenterSection from './AppMainContent/AppAboutCenter/AppAboutOurCenterSection';
import AppForChildrenSection from './AppMainContent/AppForChildrenSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import {Breadcrumb} from 'react-bootstrap';



function ServicesItemPage () {

   return (
      <div className={"app__services__item__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item  active>Дополнительные услуги</Breadcrumb.Item>
         </Breadcrumb>
         <AppServicesItemSection/>
         <AppAboutOurCenterSection/>
         <AppForChildrenSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};


export default ServicesItemPage;