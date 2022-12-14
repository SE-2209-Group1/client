import Card from "../Card";
import Divider from "../Divider";

const Training = ({ trainingData }) => {

    return (
        <>
            {trainingData.map(data =>
                <Card key={data.profileid} header={"Your Training"}>
                    <Divider>
                        <dt className="text-sm font-medium text-gray-500">Cohort:</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.cohort}</dd>
                    </Divider>
                    <Divider gray={true}>
                        <dt className="text-sm font-medium text-gray-500">Learning path:</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.learningPath}</dd>
                    </Divider>
                    <Divider>
                        <dt className="text-sm font-medium text-gray-500">Trainer:</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.trainer}</dd>
                    </Divider>
                    <Divider gray={true}>
                        <dt className="text-sm font-medium text-gray-500">Training Finish Date:</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.finishDate}</dd>
                    </Divider>
                </Card>
            )}
        </>
    );
};

export default Training;
