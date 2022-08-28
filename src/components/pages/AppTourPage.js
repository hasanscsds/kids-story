import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import AppTourSection from "./AppMainContent/AppTourSection";

function DocumentsPage () {

   return (
      <div className='documents__page'>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>3D тур</Breadcrumb.Item>
         </Breadcrumb>
         <AppTourSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};

export default DocumentsPage;