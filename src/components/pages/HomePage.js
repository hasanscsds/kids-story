import React from 'react';
import AppWelcomeBannerSection from './AppMainContent/AppBanners/AppWelcomeSection';
import AppFeaturesSection from './AppMainContent/AppFeatures/AppFeaturesSection';
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';
import AppServicesSection from './AppMainContent/AppServices/AppServicesSection';
import AppVideosSection from './AppMainContent/AppVideosSection';
import AppAdvantagesSection from './AppMainContent/AppFeatures/AppAdvantagesSection';
import AppCommunitySliderSection from './AppMainContent/AppCommunity/AppCommunitySliderSection';
import AppAboutSection from './AppMainContent/AppAboutCenter/AppAboutSection';
import AppFeedbacksSection from './AppMainContent/AppFeedbacks/AppFeedbacksSliderSection';

function HomePage() {

   return (
      <div className={"app__home__page"}>
         <AppWelcomeBannerSection/>
         <AppFeaturesSection className={"app__features__section"}/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
         <AppServicesSection className={"app__services__section"}/>
         <AppVideosSection heading={"Видеогалерея нашего сада"} text={"Вы можете ознакомиться как проходят наши будни"}/>
         <AppAdvantagesSection className={"app__advantages__section"}/>
         <AppCommunitySliderSection/>
         <AppBannerFormsSection className={"app__second__banner__section"}/>
         <AppAboutSection className={"app__about__section"}/>
         <AppFeedbacksSection className={"app__feedbacks__slider__section"}/>
      </div>
   );
}
export default HomePage;