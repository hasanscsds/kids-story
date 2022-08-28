import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppProgramSection from './AppMainContent/AppProgramSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function NewsPage() {

   return (
      <div className={"app__news__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>Новости</Breadcrumb.Item>
         </Breadcrumb>

         <AppProgramSection/>
         <AppBannerFormsSection className={"app__third__banner__section"}/>
      </div>
   );
}
export default NewsPage;