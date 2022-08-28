import React from 'react';
// import AppAvatarItem from "../AppMainContent/AppCommunity/AppAvatarItem";
import AppFeaturesSection from './AppMainContent/AppFeatures/AppFeaturesSection';
import AppVideosSection from './AppMainContent/AppVideosSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import {Breadcrumb} from 'react-bootstrap';
import AppVideosAndImagesSection from './AppMainContent/AppVideosAndImagesSection'

function VideosAndImagesPage() {
   return (
      <div className={"app__videos__and__images__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item  active>Фото и видео</Breadcrumb.Item>
         </Breadcrumb>
         <AppVideosAndImagesSection/>
         <AppVideosSection heading={"Видеогалерея нашего сада"}/>
         <AppFeaturesSection className={"app__features__section"}/>
         <AppBannerFormsSection className={"app__third__banner__section"}/>
      </div>
   );
}
export default VideosAndImagesPage;