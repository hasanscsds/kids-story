import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import AppContactsSection from './AppMainContent/AppContactsSection';

function ContactsPage() {

   return (
      <div className={"app__news__page"}>
         <Breadcrumb className="container-fluid">
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item  active>Контакты</Breadcrumb.Item>
         </Breadcrumb>

         <AppContactsSection/>
      </div>
   );
}
export default ContactsPage;