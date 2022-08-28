import React from 'react';
import AppHeaderNavbar from './AppHeaderNavbar.js';
import AppHeaderNav from './AppHeaderNav';

function AppHeader() {

   return (
      <header className={'app__header'}>
         <AppHeaderNavbar/>
         <AppHeaderNav/>
      </header>
   );
}

export default AppHeader;