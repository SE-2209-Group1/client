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


