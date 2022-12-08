import React from 'react'
import GradProfile from './graduates/GradProfile'
import PersonalStorySummary from './graduates/PersonalStorySummary'
import '../profilePage.css'

const ProfilePage = ({ profiledata, uniData }) => {
    return (
        <div>
            <div className='profile'>
                <div className='grad'>
                    <GradProfile profileData={profiledata} ></GradProfile></div>



                <div className='personal' ><PersonalStorySummary uniData={uniData} ></PersonalStorySummary>

                </div>
            </div>
        </div >




    )
}

export default ProfilePage