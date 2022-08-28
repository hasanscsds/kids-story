import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppNewsHeadlineSection from './AppMainContent/AppNews/AppNewsHeadlineSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function NewsPage() {

   return (
      <div className={"app__news__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item href="/aboutus/news" >Новости</Breadcrumb.Item>
            <Breadcrumb.Item  active>Заголовок новости</Breadcrumb.Item>
         </Breadcrumb>

         <AppNewsHeadlineSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
}
export default NewsPage;