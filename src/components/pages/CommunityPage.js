import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppCommunitySection from "./AppMainContent/AppCommunity/AppCommunitySection";
import AppFeaturesSection from './AppMainContent/AppFeatures/AppFeaturesSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function CommunityPage () {
   return (
      <div className='community__page'>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>Наша команда</Breadcrumb.Item>
         </Breadcrumb>
         <AppCommunitySection/>
         <AppFeaturesSection className={"app__features__section"}/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};


export default CommunityPage;