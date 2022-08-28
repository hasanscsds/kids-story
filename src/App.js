import './App.css';
import './style/style.scss';
import AppHeader from './components/AppHeader/AppHeader';
import AppHomePage from './components/pages/HomePage.js';
import AppServicesPage from './components/pages/ServicesPage.js';
import AppServicesItemPage from './components/pages/ServicesItemPage.js';
import AppOurCenterPage from './components/pages/OurCenterPage.js';
import AppFeedbacksPage from './components/pages/FeedbacksPage.js';
import AppDocumentsPage from './components/pages/DocumentsPage.js';
import AppForParentsPage from './components/pages/ForParentsPage.js';
import AppFoodsPage from './components/pages/FoodsPage.js';
import AppNewsPage from './components/pages/NewsPage';
import AppNewsHeadlinePage from './components/pages/NewsHeadlinePage';
import AppTourPage from './components/pages/AppTourPage';
import AppExtraServicesWeekTablePage from './components/pages/ExtraServicesServicesWeekTablePage';
import AppExtraServicesDayTablePage from './components/pages/ExtraServicesServicesDayTablePage';
import AppExtraServicesTablePage from './components/pages/ExtraServicesServicesTablePage';
import AppProgramPage from './components/pages/ProgramPage.js';
import AppVideosAndImagesPage from './components/pages/VideosAndImagesPage.js';
import AppCommunityPage from './components/pages/CommunityPage.js';
import AppContactsPage from './components/pages/ContactsPage.js';
import AppMapSection from './components/pages/AppMainContent/AppMapSection';
import AppFooter from './components/AppFooter/AppFooter';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="app">
      <AppHeader/>
        <Routes>
          <Route exact path="/" element={<AppHomePage/>}/>
          <Route exact path="/servicespage" element={<AppServicesPage/>}/>
          <Route path={'/servicespage/:id'} element={<AppServicesItemPage/>}/>
          <Route path={'/aboutus/aboutourcenter'} element={<AppOurCenterPage/>}/>
          <Route path={'/aboutus/feedbacks'} element={<AppFeedbacksPage/>}/>
          <Route path={'/aboutus/documents'} element={<AppDocumentsPage/>}/>
          <Route path={'/aboutus/forparents'} element={<AppForParentsPage/>}/>
          <Route path={'/aboutus/foods'} element={<AppFoodsPage/>}/>
          <Route path={'/aboutus/news'} element={<AppNewsPage/>}/>
          <Route path={'/aboutus/news/:id'} element={<AppNewsHeadlinePage/>}/>
          <Route path={'/aboutus/news/headline'} element={<AppNewsHeadlinePage/>}/>
          <Route path={'/aboutus/tour'} element={<AppTourPage/>}/>
          <Route path={'/extraservicesweektable'} element={<AppExtraServicesWeekTablePage/>}/>
          <Route path={'/extraservicesdaytable'} element={<AppExtraServicesDayTablePage/>}/>
          <Route path={'/extraservicestable'} element={<AppExtraServicesTablePage/>}/>
          <Route path={'/program'} element={<AppProgramPage/>}/>
          <Route path={'/videosandimages'} element={<AppVideosAndImagesPage/>}/>
          <Route path={'/community'} element={<AppCommunityPage/>}/>
          <Route path={'/contacts'} element={<AppContactsPage/>}/>
        </Routes>
        <AppMapSection/>
        <AppFooter/>
    </div>
  );
}
export default App;
