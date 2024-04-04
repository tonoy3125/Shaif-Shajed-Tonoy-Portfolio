

const Description = () => {
    return (
        <div>
            <h1 className="xs:text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">Technology</h1>
            <div className="flex flex-wrap items-center font-lora font-medium">
                <div className="w-full md:w-1/4 lg:w-1/4 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Tailwind</li>
                        <li>React</li>
                    </ul>
                </div>


                <div className="w-full md:w-1/4 lg:w-1/4 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">

                        <li>React Tab</li>
                        <li>Daisy Ui</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-1/4 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>JWT</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-1/4  lg:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Express js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <h1 className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">Project Description</h1>
            <p className="text-base font-lora font-medium ">Job Recruiter is an online platform designed for job seekers and employers alike. It offers a simple and efficient way to find jobs and post job listings. Job seekers can browse through various job opportunities and submit bids for the ones that match their skills and interests. Meanwhile, employers can easily add job listings and connect with potential candidates. The platform streamlines the job search process, making it accessible and straightforward for everyone involved. Whether you're looking for your next career move or seeking to fill a vacant position, CareerHub Connect provides a user-friendly solution for all your job-related needs.</p>
            <h1 className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">Unique Features</h1>
            <ul className="font-lora">
                <ul className="list-disc pl-5">
                    <li><strong>Navigation Bar:</strong>
                        <ul className="list-disc pl-5">
                            <li>Home: Display Job Categories, Working Process, News and Blogs, Top Companies, Our Pricing Plan.</li>
                            <li>Add Jobs: Allow users to add new Jobs.</li>
                            <li>My posted jobs: Show only user posted job.</li>
                            <li>My Bids: Show only user bid job.</li>
                            <li>Login: Enable user authentication via Google, GitHub, or email. Toggle between login and registration forms.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Home Page:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display 3 Categories job.</li>
                            <li>Clicking a job shows job details page.</li>
                            <li>This job details page have a form users can bid the job.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Add Job:</strong>
                        <ul className="list-disc pl-5">
                            <li>User can add 3 categories job.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>My Posted Job Page:</strong>
                        <ul className="list-disc pl-5">
                            <li>When User Added job this will show my posted job.</li>
                            <li>Every job have edit and delete button.</li>
                            <li>User can edit job.</li>
                            <li>User can Delete job.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>My Bid Page:</strong>
                        <ul className="list-disc pl-5">
                            <li>When Buyer accept job the job this my bid job will show a progress bar.</li>
                            <li>When Buyer rejected the job will show a progress bar.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Authentication and User Profile:</strong>
                        <ul className="list-disc pl-5">
                            <li>Allow user authentication via Google, GitHub, or email.</li>
                            <li>Show user's profile photo and name in the navbar after logging in. Provide a sign-out option.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Routing and Redirection:</strong>
                        <ul className="list-disc pl-5">
                            <li>Configure private routes for job details, My bid Job, My posted job, bid request.</li>
                            <li>Redirect users to the login page if they are not logged in.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>User Registration:</strong>
                        <ul className="list-disc pl-5">
                            <li>Allow users to register for an account.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>MongoDb Sorting System:</strong>
                        <ul className="list-disc pl-5">
                            <li>In My Bid Page sort status.</li>
                        </ul>
                    </li>
                </ul>


            </ul>
        </div>
    );
};

export default Description;