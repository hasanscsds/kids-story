import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppDocumentsSection from "./AppMainContent/AppDocuments/AppDocumentsSection";
import AppCertificationsSection from "./AppMainContent/AppDocuments/AppCertificationsSection";
import AppBannerFormsSection from './AppMainContent/AppBanners/AppBannerFormsSection';

function DocumentsPage () {
   return (
      <div className='documents__page'>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item>О нас</Breadcrumb.Item>
            <Breadcrumb.Item  active>Документы</Breadcrumb.Item>
         </Breadcrumb>
         <AppDocumentsSection/>
         <AppCertificationsSection/>
         <AppBannerFormsSection className={"app__first__banner__section"}/>
      </div>
   );
};


export default DocumentsPage;