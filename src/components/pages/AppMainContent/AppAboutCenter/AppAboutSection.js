import React from 'react';
import AppAboutCenter from "./AppAboutCenterContent";
import SectionHeader from '../SomeParts/SectionHeader';

function AppAboutSection ({className}) {
   return (
         <section className={`my-5 ${className}`}>
            <SectionHeader heading={"О нашем центре"} text={"Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты."}/>
            <AppAboutCenter/>
         </section>
         );
      };


export default AppAboutSection;