import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileData, getTrainingData } from "./components/AsyncFunctions/asyncDataHandlers.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GradProfile from "./components/graduates/GradProfile";
import ProfilePage from "./components/ProfilePage.jsx";

export default function App() {
  const [profile, setProfile] = useState([]);
  const [errorStatus, setErrorStatus] = useState(``);
  const [profileid, setProfileid] = useState(1);
  const [training, setTraining] = useState([]);

  const getGradProfile = () => {
    getProfileData(setProfile, setErrorStatus, profileid);
  };
  useEffect(() => {
    getGradProfile();
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
        <Route path="/" element={<ProfilePage profiledata={profile} />} />
        <Route path="/" element={<ProfilePage trainingdata={training} />} />
      </Routes>
      <Footer />
    </>
  );
}
