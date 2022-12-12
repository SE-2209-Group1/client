import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { getProfileData, getTrainingData } from "./components/AsyncFunctions/asyncDataHandlers.js";
=======
import { getProfileData, getUniData } from "./components/AsyncFunctions/asyncDataHandlers.js";
>>>>>>> ef2a5100962bf79b33e8c5d7c5f75fdc2fa0a6a5
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GradProfile from "./components/graduates/GradProfile";
import ProfilePage from "./components/ProfilePage.jsx";

export default function App() {
  const [profile, setProfile] = useState([]);
  const [errorStatus, setErrorStatus] = useState(``);
  const [profileid, setProfileid] = useState(1);
<<<<<<< HEAD
  const [training, setTraining] = useState([]);
=======
  const [uniDeg, setUniDeg] = useState([])
>>>>>>> ef2a5100962bf79b33e8c5d7c5f75fdc2fa0a6a5

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

  const getTraining = () => {
    getTrainingData(setTraining, setErrorStatus, profileid);
  };
  useEffect(() => {
    getTraining();
  }, []);

  return (
    <>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<ProfilePage profiledata={profile} />} />
        <Route path="/" element={<ProfilePage trainingdata={training} />} />
=======
        <Route path="/" element={<ProfilePage profiledata={profile} uniData={uniDeg} />} />
>>>>>>> ef2a5100962bf79b33e8c5d7c5f75fdc2fa0a6a5
      </Routes>
      <Footer />
    </>
  );
}
