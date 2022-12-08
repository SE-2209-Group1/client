import React from 'react'
import GradProfile from './graduates/GradProfile'
import Training from '../Graduate/Training'

const ProfilePage = ({ profiledata, trainingdata }) => {
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

            <div >{trainingdata.map(data =>
                <Training key={data.profileid}
                    cohort={data.cohort}
                    learningPath={data.learningPath}
                    trainer={data.trainer}
                    finishDate={data.finishDate}
                    moduleGrades={data.moduleGrades}

                ></Training>)}</div>

        </>
    )
}

export default ProfilePage