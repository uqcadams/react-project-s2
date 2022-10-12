import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Samples from "./components/Samples";
import EditSample from "./components/EditSample";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Samples />} />
        <Route path="/edit/:id" element={<EditSample />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
