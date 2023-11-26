import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound.jsx";
import {Blog} from "./pages/Blog.jsx";
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
  