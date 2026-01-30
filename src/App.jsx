import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop';
import ScrollRestoration from './components/common/ScrollRestoration';
import Sidebar from './components/layout/Sidebar';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPost from './components/blogs/BlogPost';

// Services Sub-pages
import Ecommerce from './components/services/Ecommerce';
import SEO from './components/services/SEO';
import ContentWriting from './components/services/ContentWriting';
import GraphicDesign from './components/services/GraphicDesign';
import SocialMedia from './components/services/SocialMedia';
import MobileApp from './components/services/MobileApp';
import WebDevelopment from './components/services/WebDevelopment';
import CustomSoftware from './components/services/CustomSoftware';

// Admin
import AdminLayout from './admin/layouts/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import ManageBlog from './admin/pages/ManageBlog';
import ManageReviews from './admin/pages/ManageReviews';

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-full text-white/50 text-2xl font-bold border-2 border-dashed border-white/10 rounded-2xl">
    {title} &mdash; Coming Soon
  </div>
);

const App = () => {
  return (
   
    <Router>
      <ScrollRestoration />
      <ScrollToTop />
      <Sidebar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/e-commerce" element={<Ecommerce />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/services/app-development" element={<MobileApp />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blogs" element={<ManageBlog />} />
          <Route path="projects" element={<Placeholder title="Manage Portfolio" />} />
          <Route path="team" element={<Placeholder title="Manage Team Members" />} />
          <Route path="messages" element={<Placeholder title="View Inquiries" />} />
          <Route path="reviews" element={<ManageReviews />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;