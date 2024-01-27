import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddVideo from "./pages/AddVideo";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddVideo />} />
        <Route path="/collection" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
