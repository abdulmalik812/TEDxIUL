import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutTEDxPage from './pages/AboutTEDxPage';
import AboutTEDxIULPage from './pages/AboutTEDxIULPage';
import AboutIULPage from './pages/AboutIULPage';
import TeamPage from './pages/TeamPage';
import SponsorsPage from './pages/SponsorsPage';
import RegisterPage from './pages/RegisterPage';
import VenuePage from './pages/VenuePage';
import SpeakersPage from './pages/SpeakersPage';
import SchedulePage from './pages/SchedulePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"               element={<HomePage />} />
      <Route path="/about/tedx"     element={<AboutTEDxPage />} />
      <Route path="/about/tedxiul"  element={<AboutTEDxIULPage />} />
      <Route path="/about/iul"      element={<AboutIULPage />} />
      <Route path="/team"           element={<TeamPage />} />
      <Route path="/sponsors"       element={<SponsorsPage />} />
      <Route path="/register"       element={<RegisterPage />} />
      <Route path="/venue"          element={<VenuePage />} />
      <Route path="/speakers"       element={<SpeakersPage />} />
      <Route path="/schedule"       element={<SchedulePage />} />
      <Route path="/faq"            element={<FAQPage />} />
      <Route path="/contact"        element={<ContactPage />} />
    </Routes>
  );
}

