import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileData, getUniData } from "./components/AsyncFunctions/asyncDataHandlers.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GradProfile from "./components/graduates/GradProfile";
import ProfilePage from "./components/ProfilePage.jsx";
import Training from "./components/graduates/Training.jsx";

export default function App() {
  const [profile, setProfile] = useState([]);
  const [errorStatus, setErrorStatus] = useState(``);
  const [profileid, setProfileid] = useState(1);
  const [uniDeg, setUniDeg] = useState([])
  const [training, setTraining] = useState([])

  const getGradProfile = () => {
    getProfileData(setProfile, setErrorStatus, profileid);
  };

  const getPersonalInfo = () => {
    getUniData(setUniDeg, setErrorStatus, profileid)
  }

  const getTrainingInfo = () => {
    getTrainingData(setTraining, setErrorStatus, profileid);
  };

  useEffect(() => {
    getGradProfile();
    getPersonalInfo();
    getTrainingInfo();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProfilePage profiledata={profile} uniData={uniDeg} trainingData={training} />} />
      </Routes>
      <Footer />
    </>
  );
}
