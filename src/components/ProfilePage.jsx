import React from 'react'
import GradProfile from './graduates/GradProfile'
import PersonalStorySummary from './graduates/PersonalStorySummary'
import '../profilePage.css'

const ProfilePage = ({ profiledata, uniData }) => {
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
                        <Training trainingData={trainingdata} ></Training></div>



                    {/* <div className='personal' ><PersonalStorySummary uniData={uniData} ></PersonalStorySummary> */}
                    {/* This is where the module grades will go */}

                    {/* </div> */}
                </div>
            </div >

        </>


    )
}

export default ProfilePage;