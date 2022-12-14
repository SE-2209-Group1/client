import Card from "../Card";
import Divider from "../Divider";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, ref } from "react";

import { forwardRef, useImperativeHandle } from "react";

const GradProfileForm = forwardRef(({ profileData, getAllProfileData }, ref) => {

    const [profile, setEditProfile] = useState({

    })

    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target;
        setEditProfile({
            ...profile,
            [name]: value,

        });
    };

    useImperativeHandle(ref, () => ({
        async updateProfile() {

            const res = await axios.put(`http://localhost:4000/editProfile/1`, profile);
            getAllProfileData();
            console.log(res)
            setEditProfile({

            })
            navigate('/')

        }
    }))



    return (
        <>
            {!(profileData && profileData.length > 0) ? (<div role="status">
                <svg className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>) :
                <Card header={"Edit Your Profile"}>
                    <form>
                        <Divider gray={true}>
                            <dt className="text-sm font-medium text-gray-500">Full name:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " name='name' placeholder="Full name" value={profile.name} onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider>
                            <dt className="text-sm font-medium text-gray-500">Email:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " value={profile.personalemail} placeholder="Email" name='personalemail' onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider gray={true}>
                            <dt className="text-sm font-medium text-gray-500">Work Email:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " name='workemail' placeholder="Work email" value={profile.workemail} onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider>
                            <dt className="text-sm font-medium text-gray-500">Mobile:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " name='phoneno' placeholder="Mobile number" value={profile.phoneno} onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider gray={true}>
                            <dt className="text-sm font-medium text-gray-500">Gender:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " name='gender' placeholder="Gender" value={profile.gender} onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider>
                            <dt className="text-sm font-medium text-gray-500">Nationality:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " name='nationality' placeholder="Nationality" value={profile.nationality} onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider gray={true}>
                            <dt className="text-sm font-medium text-gray-500">Personality:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input className="bg-white p-2 hover:border-2 " name='personality' placeholder="Personality" value={profile.personality} onChange={handleChange} />
                            </dd>
                        </Divider>

                        <Divider>
                            <dt className="text-sm font-medium text-gray-500">Elsewhere:</dt>
                            <dd className="sm:col-span-2 sm:mt-0 flex">
                                <a href='' title="LinkedIn">
                                    <svg className="w-5 h-5 flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path></svg>
                                </a>
                                <a href='' title="Github">
                                    <svg className="w-5 h-5 flex ml-4" xmlns="http://www.w3.org/2000/svg" width="0" height="0" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path></svg>
                                </a>
                            </dd>
                        </Divider>
                    </form>
                </Card>

            }
        </>
    );

})
export default GradProfileForm