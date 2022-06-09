import React from "react";
import { Routes, Route  } from "react-router-dom";

import { Dashboard } from "./pages/";

function App() {

  return (
    <div className="body-font font-poppins">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
