import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppNewsSection from './AppMainContent/AppNews/AppNewsSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function NewsPage() {

   return (
      <div className={"app__news__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>Новости</Breadcrumb.Item>
         </Breadcrumb>

         <AppNewsSection/>
         <AppBannerFormsSection className={"app__fourth__banner__section"}/>
      </div>
   );
}
export default NewsPage;