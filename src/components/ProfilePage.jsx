import React from 'react'
import GradProfile from './graduates/GradProfile'
import PersonalStorySummary from './graduates/PersonalStorySummary'
import '../profilePage.css'

const ProfilePage = ({ profiledata }) => {
    return (
        <>
            <div className='profile'>{profiledata.map(data =>
                <div className='grad'>
                    <GradProfile key={data.profileid}
                        fullName={data.name}
                        personalEmail={data.personalemail}
                        workEmail={data.workemail}
                        gender={data.gender}
                        phoneNum={data.phoneno}
                        nationality={data.nationality}
                        personality={data.personality}
                        githubLink={data.githublink}
                        linkedinLink={data.linkedinlink}

                    ></GradProfile></div>

            )}<div className='personal'><PersonalStorySummary></PersonalStorySummary></div></div>

        </>
    )
}

export default ProfilePage