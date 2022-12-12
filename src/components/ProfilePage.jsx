import React from 'react'
import GradProfile from './graduates/GradProfile'
import Training from './graduates/Training.jsx';
import PersonalStorySummary from './graduates/PersonalStorySummary'
import '../profilePage.css'
import Modules from './graduates/Modules';

const ProfilePage = ({ profiledata, uniData, trainingData, modulesData }) => {
    return (
        <>
            <div>
                <div className='profile'>
                    <div className='grad'>
                        <GradProfile profileData={profiledata} ></GradProfile></div>

                    <div className='personal' ><PersonalStorySummary uniData={uniData} ></PersonalStorySummary>

                    </div>
                </div>
            </div >

            <div>
                <div className='training'>
                    <div className='grad'>
                        <Training trainingData={trainingData} ></Training></div>

                    <div className='modules' ><Modules modulesData={modulesData} ></Modules>

                    </div>
                </div>
            </div >

        </>


    )
}

export default ProfilePage;