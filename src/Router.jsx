import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./@pages/home";
import MeetList from "./@pages/meetList";
import Review from "./@pages/review";
import Nowadays from "./@pages/nowadays";
import Openmeeting from "./@pages/openmeeting";
import MeetDetail from "./@pages/meetdetail";
import Mypage from "./@pages/mypage";
import NowadaysDetail from "./@pages/nowadaysDetail";
import Onboarding from "./@pages/onboarding";
import OnboardingStep from "./@pages/onboardingStep";
import ScrollToTop from "./@components/ScrollToTop";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/onboardingStep" element={<OnboardingStep />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meetList/*" element={<MeetList />} />
        <Route path="/review" element={<Review />} />
        <Route path="/nowadays" element={<Nowadays />} />
        <Route path="/nowadaysDetail/:id/*" element={<NowadaysDetail />} />
        <Route path="/openmeeting" element={<Openmeeting />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/meetdetail/:id/*" element={<MeetDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
