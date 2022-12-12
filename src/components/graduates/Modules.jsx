const Modules = ({ modulesData }) => {

    return (
        <>
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                {modulesData.map(data =>
                    <div className="w-full flex flex-col 2xl:w-1/3" key={data.profileid}>
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Module Grades</h4>
                            <ul className="mt-2 text-gray-700">
                                <li className="flex border-y py-2">
                                    <span className="font-bold w-24">Module:</span>
                                    <span className="text-gray-700">{data.modules}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Challenge:</span>
                                    <span className="text-gray-700">{data.challenge}</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24">Grade:</span>
                                    <span className="text-gray-700">{data.grade}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Modules;