import { useState } from "react";
import GradProfile from './graduates/GradProfile'
import Training from './graduates/Training.jsx';
import PersonalStorySummary from './graduates/PersonalStorySummary'
import Modules from './graduates/Modules';
import GradProfileForm from "./graduates/GradProfileForm";
import PersonalStoryForm from "./graduates/PersonalStoryForm";
import YourInformation from "./graduates/YourInformation";

const ProfilePage = ({ profiledata, uniData, trainingData, modulesData, schoolData,workData,awardData ,portfolioData}) => {
    const [pageType, setPageType] = useState("normal");
    const isNormalMode = pageType === "normal";
    const isEditMode = pageType === "edit";

    return (
        <div className='bg-DFXBg'>
            <div className='p-24'>
                <div className="flex ml-5 mb-3.5">
                    <p className="text-DFXBlue cursor-pointer"
                        onClick={() => { setPageType(isNormalMode ? "edit" : "normal") }}>
                        {isNormalMode ? "Edit" : "Go Back"}
                    </p>
                    {isEditMode && (<>
                        <button className="absolute right-28 text-white text-sm bg-DFXBlue p-2 rounded-lg">
                            Save Changes
                        </button>
                    </>)}
                </div>
                <div className='inline-flex w-full'>
                    <div className='flex w-full'>
                        {isNormalMode ? <GradProfile profileData={profiledata} /> :
                            <GradProfileForm profileData={profiledata} />}
                    </div>

                    <div className='ml-10 flex w-full'>
                        {isNormalMode ? <PersonalStorySummary uniData={uniData} schoolData={schoolData} workData={workData} awardData={awardData} portfolioData={portfolioData}/> :
                            <PersonalStoryForm uniData={uniData} schoolData={schoolData} workData={workData} awardData={awardData} portfolioData={portfolioData}/>
                        }
                    </div>
                </div>
                <div className='inline-flex w-full'>
                    <div className='flex w-full'>
                        <Training trainingData={trainingData} />
                    </div>

                    <div className='ml-10 flex w-full' >
                        <Modules modulesData={modulesData} />
                    </div>
                </div>

                <div className='inline-flex w-full'>
                    <YourInformation profileData={profiledata} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;