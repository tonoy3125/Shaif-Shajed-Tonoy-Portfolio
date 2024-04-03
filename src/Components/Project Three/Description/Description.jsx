

const Description = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Technology</h1>
            <div className="flex flex-wrap items-center font-lora font-medium">
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Tailwind</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Sslcommerz</li>
                        <li>Tanstack-query</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Redux</li>
                        <li>Framer-Motion</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">

                        <li>Material-ui</li>
                        <li>Zigo Cloud</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>JWT</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 lg:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Express js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Project Description</h1>
            <p className="text-base font-lora font-medium ">At BD Quick School, we believe in the power of knowledge to make a difference in people's lives. Our platform is crafted to offer a seamless and enjoyable learning experience for individuals from all walks of life, regardless of age or background. Whether you're a student looking to excel in your studies, a professional aiming to enhance your skills, or simply someone with a passion for lifelong learning, we cater to everyone's needs. With our user-friendly interface and engaging content, discovering new concepts and expanding your knowledge has never been easier. Join us on our journey to unlock the endless possibilities that education has to offer. Together, let's embark on a fulfilling learning experience that will empower you to achieve your goals and thrive in today's ever-changing world.</p>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Unique Features</h1>
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