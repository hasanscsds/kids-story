import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppFoodsSection from './AppMainContent/AppFoodsSection';
import AppVideosSection from './AppMainContent/AppVideosSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function FoodsPage () {
   return (
      <div className={"foods__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>Питание</Breadcrumb.Item>
         </Breadcrumb>

         <AppFoodsSection/>
         <AppVideosSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};

export default FoodsPage;