import React from "react";
import { Routes, Route  } from "react-router-dom";

import { Dashboard, Login } from "./pages/";

function App() {

  return (
    <div className="body-font font-poppins">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
