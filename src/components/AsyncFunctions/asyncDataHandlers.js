import axios from "axios";

export const getProfileData = async (setProfile, setErrorStatus, profileid) => {
  try {
    const responseProfileURL = await axios.get(
      `http://localhost:4000/getprofiles/${profileid}`
    );
    console.log(responseProfileURL.data);
    setProfile(responseProfileURL.data);
  } catch (error) {
    setErrorStatus(error.message);
  }
};

export const getUniData = async (setUniDeg, setErrorStatus, profileid) => {
  try {
    const responseUniURL = await axios.get(
      `http://localhost:4000/getunidegree/${profileid}`
    );
    console.log(responseUniURL.data);
    setUniDeg(responseUniURL.data);
  } catch (error) {
    setErrorStatus(error.message);
  }
};

export const getTrainingData = async (setTraining, setErrorStatus, profileid) => {
  try {
    const responseTrainingURL = await axios.get(
      `http://localhost:4000/getTraining/${profileid}`
    );
    console.log(responseTrainingURL.data);
    setTraining(responseTrainingURL.data);
  } catch (error) {
    setErrorStatus(error.message);
  }
};

export const getModuleData = async (setModules, setErrorStatus, profileid) => {
  try {
    const responseModulesURL = await axios.get(
      `http://localhost:4000/getModules/${profileid}`
    );
    console.log(responseModulesURL.data);
    setModules(responseModulesURL.data);
  } catch (error) {
    setErrorStatus(error.message);
  }
};


