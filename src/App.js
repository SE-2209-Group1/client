import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileData } from "./components/AsyncFunctions/asyncDataHandlers.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GradProfile from "./components/graduates/GradProfile";

export default function App() {
  const [profile, setProfile] = useState([]);
  const [errorStatus, setErrorStatus] = useState(``);
  const [profileid, setProfileid] = useState(1);

  const getGradProfile = () => {
    getProfileData(setProfile, setErrorStatus, profileid);
  };
  useEffect(() => {
    getGradProfile();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GradProfile profiledata={profile} />} />
      </Routes>
      <Footer />
    </>
  );
}
