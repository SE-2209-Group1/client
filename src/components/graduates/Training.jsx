const Training = ({ trainingData }) => {

    return (
        <>
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                {trainingData.map(data =>
                    <div className="w-full flex flex-col 2xl:w-1/3">
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Your Training</h4>
                            <ul className="mt-2 text-gray-700">
                                <li className="flex border-y py-2">
                                    <span className="font-bold w-24">Cohort:</span>
                                    <span className="text-gray-700">{data.cohort}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Learning path:</span>
                                    <span className="text-gray-700">{data.learningPath}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Trainer:</span>
                                    <span className="text-gray-700">{data.trainer}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Training Finish Date:</span>
                                    <span className="text-gray-700">{data.finishDate}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Training;