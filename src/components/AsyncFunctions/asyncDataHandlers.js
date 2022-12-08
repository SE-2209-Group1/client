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

export const getTrainingData = async (setTraining, setErrorStatus, profileid) => {
  try {
    const responseTrainingURL = await axios.get(
      `http://localhost:4000/yourTraining/${profileid}`
    );
    console.log(responseTrainingURL.data);
    setTraining(responseTrainingURL.data);
  } catch (error) {
    setErrorStatus(error.message);
  }
};
