import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import Index from "./pages";
import { ProjectDetail } from "./pages/projectDetail";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/projects/:slug" element={<ProjectDetail />}></Route>
      </Routes>
    </Router>
  );
}
