import Card from "../Card";
import Divider from "../Divider";

const Modules = ({ modulesData }) => {

    return (
        <>
            {modulesData.map(data =>
                <Card key={data.profileid} header={"Module Grades"}>
                    <Divider>
                        <dd className="text-sm font-medium text-gray-500">Module:</dd>
                        <dt className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.modules}</dt>
                    </Divider>
                    <Divider gray={true}>
                        <dd className="text-sm font-medium text-gray-500">Challenge:</dd>
                        <dt className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.challenge}</dt>
                    </Divider>
                    <Divider>
                        <dd className="text-sm font-medium text-gray-500">Grade:</dd>
                        <dt className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.grade}</dt>
                    </Divider>

                </Card>
            )
            }
        </>
    );
};

export default Modules;