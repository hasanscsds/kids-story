import React from 'react';
import AppFooterTopSection from './AppFooterTopSection';
import AppFooterBottomSection from './AppFooterBottomSection';


function AppFooter ()  {
   return (
         <footer className="app__footer">
            <AppFooterTopSection/>
            <AppFooterBottomSection/>
         </footer>   
         );
      };


export default AppFooter;