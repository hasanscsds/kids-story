import React from 'react';
import AppExtraServicesDayTableSection from './AppMainContent/AppServices/AppExtraServicesDayTableSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import {Breadcrumb} from 'react-bootstrap';



function ExtraServicesDayTablePage () {

   return (
      <div className={"app__services__item__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>Расписание</Breadcrumb.Item>
            <Breadcrumb.Item  active>Режим дня</Breadcrumb.Item>
         </Breadcrumb>
         <AppExtraServicesDayTableSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};


export default ExtraServicesDayTablePage;