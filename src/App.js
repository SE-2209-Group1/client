import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileData, getUniData } from "./components/AsyncFunctions/asyncDataHandlers.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GradProfile from "./components/graduates/GradProfile";
import ProfilePage from "./components/ProfilePage.jsx";

export default function App() {
  const [profile, setProfile] = useState([]);
  const [errorStatus, setErrorStatus] = useState(``);
  const [profileid, setProfileid] = useState(1);
  const [uniDeg, setUniDeg] = useState([])

  const getGradProfile = () => {
    getProfileData(setProfile, setErrorStatus, profileid);
  };

  const getPersonalInfo = () => {
    getUniData(setUniDeg, setErrorStatus, profileid)
  }
  useEffect(() => {
    getGradProfile();
    getPersonalInfo();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProfilePage profiledata={profile} uniData={uniDeg} />} />
      </Routes>
      <Footer />
    </>
  );
}
