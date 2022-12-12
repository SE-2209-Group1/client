import moment from 'moment';

import React from 'react'
import Card from '../Card'
import Divider from '../Divider'

const PersonalStorySummary = ({ uniData }) => {
	return (
		<>
			{uniData.map(data => (
				<Card key={data.profileid} header={"Personal story summary:"}>
					<dl>
						<Divider gray={true}>
							<dt className="text-sm font-medium text-gray-500">University Degree:</dt>
							<dd className="sm:col-span-2 sm:mt-0">
								<p><strong>Subject: </strong>{data.unidesc}</p>
								<p><strong>University: </strong> {data.uniname}</p>
								<p><strong>Grade: </strong> {data.unigrade}</p>
								<p><strong>Level: </strong> {data.unilevel}</p>
								<p><strong>From: </strong> {moment(data.fromdate).format('DD/MM/YYYY')} <strong> to: </strong>{moment(data.todate).format('DD/MM/YYYY')}</p>
							</dd>
						</Divider>

						<Divider>
							<dt className="text-sm font-medium text-gray-500">School qualification:</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
						</Divider>

						<Divider gray={true}>
							<dt className="text-sm font-medium text-gray-500">Work Experience:</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
						</Divider>

						<Divider>
							<dt className="text-sm font-medium text-gray-500">Certificate and Awards:</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
						</Divider>

						<Divider gray={true}>
							<dt className="text-sm font-medium text-gray-500">Portfolio:</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
									<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
										<div className="flex w-0 flex-1 items-center">

											<svg className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
											</svg>
											<span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
										</div>
										<div className="ml-4 flex-shrink-0">
											<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
										</div>
									</li>
									<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
										<div className="flex w-0 flex-1 items-center">

											<svg className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
											</svg>
											<span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
										</div>
										<div className="ml-4 flex-shrink-0">
											<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
										</div>
									</li>
								</ul>
							</dd>
						</Divider>
					</dl>
				</Card>
			)
			)}
		</>
	)
}

export default PersonalStorySummary;