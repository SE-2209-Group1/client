import React from 'react'
import GradProfile from './graduates/GradProfile'

const ProfilePage = ({ profiledata }) => {
    return (
        <>
            <div >{profiledata.map(data =>
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

                ></GradProfile>)}</div>

        </>
    )
}

export default ProfilePage