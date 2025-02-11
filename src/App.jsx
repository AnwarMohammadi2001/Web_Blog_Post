import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout'
function App() {
  return (
    <Router className="bg">
      <Routes>
        <Route path="/" element={<Layout />}>
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
