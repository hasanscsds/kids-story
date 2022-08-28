import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function AppHeaderNavbarTop () {

   return (
      <Navbar className={`app__header__navbar__top w-100 d-flex justify-content-end`}>
         <Nav.Link className="address__link" href="./">Москва, ул. Муравская д.38, к.1 ЖК Мир Митино<span> М. Пятницкое шоссе</span></Nav.Link>
      </Navbar>
   );
};

export default AppHeaderNavbarTop;