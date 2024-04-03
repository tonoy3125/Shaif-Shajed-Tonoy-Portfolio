

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
                        <li>Daisy ui</li>
                        <li>Tanstack-query</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">
                        <li>Axios</li>
                        <li>React Hook Form</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
                    <ul className="list-disc ml-4">

                        <li>Stripe</li>
                        <li>ImageBB</li>
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
            <p className="text-base font-lora font-medium ">Evergreen Estate helps people buy, sell, and rent homes. There are three main roles: users, agents, and admins. Agents help users with their transactions, giving them advice and support. Admins control everything, managing users and agents to keep things running smoothly. Whether you want to sell your home or find a place to rent, Evergreen Estate has an easy-to-use website and lots of useful features to help you. By putting buying, selling, and renting all in one place, Evergreen Estate makes real estate simple for everyone involved. It's a trusted website that people rely on when they're dealing with homes.</p>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Unique Features</h1>
            <ul className="font-lora">
                <ul className="list-disc pl-5">
                    <li><strong>Navbar 🚀:</strong>
                        <ul className="list-disc pl-5">
                            <li>Implement a navigation bar at the top of the application with links to different sections/pages.</li>
                            <li>Use intuitive icons or labels for easy understanding and navigation.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Banner/Slider 🎨:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create a visually appealing banner/slider section on the homepage.</li>
                            <li>Use high-quality images to attract users' attention.</li>
                            <li>Ensure smooth transitions between slides for a captivating effect.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Advertisement Section 🏡:</strong>
                        <ul className="list-disc pl-5">
                            <li>Design a section on the homepage to display attractive property cards.</li>
                            <li>Ensure that only admin-verified properties are shown.</li>
                            <li>Include direct links to property details for user convenience.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Latest User Review Section 🌟:</strong>
                        <ul className="list-disc pl-5">
                            <li>Implement a dynamic section to display recent user reviews.</li>
                            <li>Fetch reviews from the database and display them in a visually appealing format.</li>
                            <li>Include star ratings or other indicators for credibility.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Verified Properties 🌟:</strong>
                        <ul className="list-disc pl-5">
                            <li>Showcase admin-verified properties for user trust.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Search Functionality 🔍:</strong>
                        <ul className="list-disc pl-5">
                            <li>Implement swift property search by title for an enhanced user experience.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Sort Functionality 🔄:</strong>
                        <ul className="list-disc pl-5">
                            <li>Empower users with dynamic sorting options based on price range.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Role-Based Routes ✨:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create custom navigation links based on user roles (Normal user, Agent, Admin).</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Different Dashboards 📝:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create user, agent, and admin dashboards catering to distinct needs.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Admin Profile Page 🌐:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display admin information such as name, image, and role with a touch of professionalism.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Manage Properties Page 🏡:</strong>
                        <ul className="list-disc pl-5">
                            <li>View all properties added by agents and navigate through them seamlessly.</li>
                            <li>Organize property details in a table including title, location, agent, email, and price range.</li>
                            <li>Provide verify and reject buttons for admin to manage property status.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Manage Users Page 👥:</strong>
                        <ul className="list-disc pl-5">
                            <li>Tabular view of all users for simplified user management.</li>
                            <li>Quick access to user information including name and email.</li>
                            <li>Admin actions such as making admin, making agent, marking as fraud, and deleting user.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Manage Reviews Page 📝:</strong>
                        <ul className="list-disc pl-5">
                            <li>Efficiently manage user reviews for all properties.</li>
                            <li>Allow admin to delete reviews for quick removal of irrelevant or inappropriate content.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Advertise Property Page 🚀:</strong>
                        <ul className="list-disc pl-5">
                            <li>Allow admin to view all verified properties for easy access to property details.</li>
                            <li>Organize property details in a table including image, title, price range, and agent.</li>
                            <li>Provide advertise and remove advertise buttons for admin to manage property advertisements dynamically.</li>
                            <li>Set a limitation on the number of advertised properties.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Reported Property Page 🚫:</strong>
                        <ul className="list-disc pl-5">
                            <li>Allow admin to view all reported properties by users.</li>
                            <li>Organize reported property details in a card format including property image, title, reporter information, and agent information.</li>
                            <li>Enable admin to manage reported properties and remove specific reported properties and reviews.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Agent Profile Page 🌟:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display agent information such as name, image, and role with a touch of professionalism.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Add Property Page 🏠📝:</strong>
                        <ul className="list-disc pl-5">
                            <li>Provide a form to add a new property including title, location, image upload, agent details, and price range.</li>
                            <li>Simplify property addition with an intuitive form.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>My Added Properties Page 🌐:</strong>
                        <ul className="list-disc pl-5">
                            <li>Allow agents to view all properties they have added and navigate through them seamlessly.</li>
                            <li>Organize property details in a table for easy reference.</li>
                            <li>Enable admin-controlled property verification and dynamic controls for property updates and removal.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Requested/Offered Properties Page 🗂:</strong>
                        <ul className="list-disc pl-5">
                            <li>Present all offers in a clear and organized table format for easy reference.</li>
                            <li>Provide accept and reject buttons for agents to manage property offers efficiently.</li>
                            <li>Initiate the property transaction process upon acceptance of offers.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>My Profile Page 📋👥:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display user information including name, image, and role for easy reference.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Wishlist Page 💭🌟:</strong>
                        <ul className="list-disc pl-5">
                            <li>Allow users to view wishlisted properties with property details in a table format.</li>
                            <li>Include "Make an Offer" and "Remove" buttons for user convenience.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Property Bought Page 🏠🛍:</strong>
                        <ul className="list-disc pl-5">
                            <li>Present purchased properties with offer details in a table format for easy reference.</li>
                            <li>Include a "Pay" button for seamless transaction completion.</li>
                            <li>Enable payment method upon acceptance of offers by property agents.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>My Reviews Page 📝👀:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display user reviews with property details in a table format for easy management.</li>
                            <li>Implement a "Delete" button for users to manage their reviews conveniently.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Authentication Service 🚪:</strong>
                        <ul className="list-disc pl-5">
                            <li>Implement JWT-based authentication for user login and registration.</li>
                            <li>Create endpoints for login, registration, and token management.</li>
                            <li>Use middleware to handle access control based on user roles.</li>
                            <li>Provide UI elements for login and registration forms.</li>
                            <li>Securely store JWT tokens on the client-side.</li>
                            <li>Implement logout functionality to invalidate tokens.</li>
                        </ul>
                    </li>
                </ul>

            </ul>
        </div>
    );
};

export default Description;