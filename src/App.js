import Home from "./pages/home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import OurTeam from "./pages/ourteam/OurTeam";
import OurSolution from "./pages/oursolution/OurSolution";
import CareerOpertunity from "./pages/careeropertunity/CareerOpertunity";
import Blogs from "./pages/blogs/Blogs";
import BlogDetail1 from "./pages/blogs/component/blog1/BlogDetail1";
import BlogDetail from "./pages/blogs/BlogDetail";
import BlogDetail2 from "./pages/blogs/component/blog1/BlogDetail2";
import BlogDetai3 from "./pages/blogs/BlogDetail3";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import Contact from "./pages/contact/Contact";
import TermCondition from './pages/termcondition/TermCondition';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/oursolution" element={<OurSolution />} />
      <Route path="/career" element={<CareerOpertunity />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/readmore" element={<BlogDetail />} />
      <Route path="/readmore1" element={<BlogDetail1 />} />
      <Route path="/readmore2" element={<BlogDetail2 />} />
      <Route path="/readmore4" element={<BlogDetai3 />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/termcondition" element={<TermCondition />} />
    </Routes>
  );
}

export default App;
