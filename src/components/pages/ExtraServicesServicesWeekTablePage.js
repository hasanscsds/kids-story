import React from 'react';
import AppExtraServicesWeekTableSection from './AppMainContent/AppServices/AppExtraServicesWeekTableSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import {Breadcrumb} from 'react-bootstrap';

function ExtraServicesDayTablePage () {

   return (
      <div className={"app__services__item__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item >Расписание</Breadcrumb.Item>
            <Breadcrumb.Item  active>Расписание основное</Breadcrumb.Item>
         </Breadcrumb>
         <AppExtraServicesWeekTableSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};


export default ExtraServicesDayTablePage;