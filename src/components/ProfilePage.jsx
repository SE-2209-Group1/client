import React from 'react'
import GradProfile from './graduates/GradProfile'
import Training from '../Graduate/Training'
import PersonalStorySummary from './graduates/PersonalStorySummary'
import '../profilePage.css'



const ProfilePage = ({ profiledata, uniData, trainingData }) => {
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



                    {/* <div className='personal' ><PersonalStorySummary uniData={uniData} ></PersonalStorySummary> */}
                    {/* This is where module marks will go */}

                </div>
            </div>

        </>
    )
}

export default ProfilePage;