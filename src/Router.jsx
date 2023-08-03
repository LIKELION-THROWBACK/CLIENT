import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./@pages/landing";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
