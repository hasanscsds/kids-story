import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppFeedbacksSection from './AppMainContent/AppFeedbacks/AppFeedbacksSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function FeedbacksPage () {
   return (
      <div className={"app__feedbacks__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>Отзывы</Breadcrumb.Item>
         </Breadcrumb>

         <AppFeedbacksSection className={"app__feedbacks__section"}/>
         <AppBannerFormsSection className={"app__third__banner__section"}/>
      </div>
   );
};

export default FeedbacksPage;