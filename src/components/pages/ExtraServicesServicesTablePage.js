import React from 'react';
import AppExtraServicesTableSection from './AppMainContent/AppServices/AppExtraServicesTableSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import {Breadcrumb} from 'react-bootstrap';



function ExtraServicesTablePage () {

   return (
      <div className={"app__services__item__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>Расписание</Breadcrumb.Item>
            <Breadcrumb.Item  active>Расписание дополнительных услуг</Breadcrumb.Item>
         </Breadcrumb>
         <AppExtraServicesTableSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};


export default ExtraServicesTablePage;