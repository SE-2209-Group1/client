import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileData, getUniData, getTrainingData, getModuleData } from "./components/AsyncFunctions/asyncDataHandlers.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProfilePage from "./components/ProfilePage.jsx";

export default function App() {
    const [profile, setProfile] = useState([]);
    const [errorStatus, setErrorStatus] = useState(``);
    const [profileid, setProfileid] = useState(1);
    const [uniDeg, setUniDeg] = useState([]);
    const [training, setTraining] = useState([]);
    const [modules, setModules] = useState([])

    const getGradProfile = () => {
        getProfileData(setProfile, setErrorStatus, profileid);
    };

    const getPersonalInfo = () => {
        getUniData(setUniDeg, setErrorStatus, profileid)
    }

    const getTrainingInfo = () => {
        getTrainingData(setTraining, setErrorStatus, profileid);
    };

    const getModuleInfo = () => {
        getModuleData(setModules, setErrorStatus, profileid);
    };

    useEffect(() => {
        getGradProfile();
        getPersonalInfo();
        getTrainingInfo();
        getModuleInfo();
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ProfilePage profiledata={profile} uniData={uniDeg} trainingData={training} modulesData={modules} />} />
            </Routes>
            <Footer />
        </>
    );
}
