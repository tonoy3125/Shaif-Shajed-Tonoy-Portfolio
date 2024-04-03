

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
            <p className="text-base font-lora font-medium ">At BD Quick School, we believe in the power of knowledge to make a difference in people's lives. Our platform is crafted to offer a seamless and enjoyable learning experience for individuals from all walks of life, regardless of age or background. Whether you're a student looking to excel in your studies, a professional aiming to enhance your skills, or simply someone with a passion for lifelong learning, we cater to everyone's needs. With our user-friendly interface and engaging content, discovering new concepts and expanding your knowledge has never been easier. Join us on our journey to unlock the endless possibilities that education has to offer. Together, let's embark on a fulfilling learning experience that will empower you to achieve your goals and thrive in today's ever-changing world.</p>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Unique Features</h1>
            <ul className="font-lora">
                <ul className="list-disc pl-5">
                    <li><strong>Login and Logout Authentication:</strong>
                        <ul className="list-disc pl-5">
                            <li>Develop a login page where users can enter their credentials (username/email and password).</li>
                            <li>Implement authentication using technologies like OAuth, JWT, or session-based authentication.</li>
                            <li>Upon successful authentication, redirect users to the main dashboard.</li>
                            <li>Provide a logout button or option to allow users to securely log out of their accounts.</li>
                        </ul>
                    </li>
                    <li><strong>Dark and Light Mode:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create a toggle switch or button in the user settings section to switch between dark and light modes.</li>
                            <li>Use CSS variables or separate CSS files to define styling for both modes.</li>
                            <li>Store user preference for dark or light mode in local storage or cookies to maintain consistency across sessions.</li>
                        </ul>
                    </li>
                    <li><strong>Translator Mode Switch between English to Bangla:</strong>
                        <ul className="list-disc pl-5">
                            <li>Integrate a translation API such as Google Translate.</li>
                            <li>Implement a dropdown menu or button to allow users to select the desired language.</li>
                            <li>Provide functionality to translate text content dynamically between English and Bangla.</li>
                        </ul>
                    </li>
                    <li><strong>Quiz Feature:</strong>
                        <ul className="list-disc pl-5">
                            <li>Develop a quiz module where users can take quizzes on various topics.</li>
                            <li>Create a user interface for displaying questions, options, and collecting user responses.</li>
                            <li>Implement scoring and feedback mechanisms.</li>
                            <li>Allow users to review their quiz results and track their progress.</li>
                        </ul>
                    </li>
                    <li><strong>Like and Dislike in Per Services:</strong>
                        <ul className="list-disc pl-5">
                            <li>Add like and dislike buttons or icons to each service or content item.</li>
                            <li>Implement functionality to record and display the number of likes and dislikes for each item.</li>
                            <li>Store user reactions in the database to personalize content recommendations.</li>
                        </ul>
                    </li>
                    <li><strong>User Able to Bookmark Any Services:</strong>
                        <ul className="list-disc pl-5">
                            <li>Implement a bookmarking feature where users can save their favorite services or content items.</li>
                            <li>Provide UI elements such as a bookmark icon or button for users to easily bookmark and unbookmark items.</li>
                            <li>Store bookmarked items in the database associated with each user's account.</li>
                        </ul>
                    </li>
                    <li><strong>Payment Feature (SSL):</strong>
                        <ul className="list-disc pl-5">
                            <li>Integrate a secure payment gateway such as Stripe or PayPal.</li>
                            <li>Implement SSL encryption to ensure secure transmission of payment data.</li>
                            <li>Provide various payment options including credit/debit cards, digital wallets, and bank transfers.</li>
                        </ul>
                    </li>
                    <li><strong>Each Student Has a Unique Student ID:</strong>
                        <ul className="list-disc pl-5">
                            <li>Generate a unique student ID for each registered student upon account creation.</li>
                            <li>Store the student ID in the database along with other user information.</li>
                            <li>Display the student ID in the user profile section for reference.</li>
                        </ul>
                    </li>
                    <li><strong>When User Buys a Course, Role is Changed to Student:</strong>
                        <ul className="list-disc pl-5">
                            <li>Implement a mechanism to detect when a user purchases a course.</li>
                            <li>Upon successful purchase, update the user's role from regular user to student.</li>
                            <li>Update user permissions and access levels accordingly based on the new role.</li>
                        </ul>
                    </li>
                    <li><strong>Live Video Chat Using Zigo Cloud:</strong>
                        <ul className="list-disc pl-5">
                            <li>Integrate Zigo Cloud or a similar service for live video chat functionality.</li>
                            <li>Implement UI elements for initiating and participating in live video chats.</li>
                            <li>Provide features such as screen sharing, text chat, and moderator controls.</li>
                        </ul>
                    </li>
                    <li><strong>Video Streaming Switch Between One Video to Another:</strong>
                        <ul className="list-disc pl-5">
                            <li>Develop a video streaming module that allows users to switch between different videos seamlessly.</li>
                            <li>Implement controls for play, pause, forward, rewind, and switch video functionality.</li>
                            <li>Ensure smooth playback across different devices and network conditions.</li>
                        </ul>
                    </li>
                    <li><strong>User Profile Section:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create a user profile page where users can view and edit their personal information.</li>
                            <li>Include sections for profile picture, username, email, and other relevant details.</li>
                            <li>Allow users to update their profile information and manage privacy settings.</li>
                        </ul>
                    </li>
                    <li><strong>Change User Name and Password in Edit Profile:</strong>
                        <ul className="list-disc pl-5">
                            <li>Add functionality for users to change their username and password from the profile settings page.</li>
                            <li>Implement validation and security measures to ensure the authenticity of password changes.</li>
                            <li>Send email notifications for successful changes and provide options for password recovery.</li>
                        </ul>
                    </li>
                    <li><strong>All User Review Section in Home Page Feedback Section:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create a feedback section on the homepage where users can view and submit reviews.</li>
                            <li>Display all user reviews in a visually appealing format, including ratings and comments.</li>
                            <li>Implement moderation tools to manage reviews and address any inappropriate content.</li>
                        </ul>
                    </li>
                    <li><strong>Admin Dashboard:</strong>
                        <ul className="list-disc pl-5">
                            <li>Develop an admin dashboard with features such as adding courses, managing courses, managing users, banning users, managing reviews, advertising reviews, adding announcements, managing announcements, and managing quizzes.</li>
                            <li>Implement role-based access control to restrict admin functionalities to authorized users.</li>
                        </ul>
                    </li>
                    <li><strong>Device Activity Showing User Which Device or Browser He/She Logged In:</strong>
                        <ul className="list-disc pl-5">
                            <li>Track and log user sessions including device information and login timestamps.</li>
                            <li>Display device activity in the user profile section or admin dashboard for users and administrators to review.</li>
                            <li>Implement security features such as session management and two-factor authentication to prevent unauthorized access.</li>
                        </ul>
                    </li>
                    <li><strong>AI Chat Assistant:</strong>
                        <ul className="list-disc pl-5">
                            <li>Integrate a chatbot using AI technologies such as Dialogflow or Rasa to provide assistance to users.</li>
                            <li>Implement natural language processing to understand user queries and provide relevant responses.</li>
                            <li>Provide a conversational interface for users to interact with the AI chat assistant and get their problems solved.</li>
                        </ul>
                    </li>
                    <li><strong>User Chat with Our Team via Messenger:</strong>
                        <ul className="list-disc pl-5">
                            <li>Integrate a messaging platform or chat system to allow users to communicate with the support team.</li>
                            <li>Provide options for users to initiate chats, send messages, and receive replies from the team.</li>
                            <li>Implement features such as message threading, file attachments, and notifications for new messages.</li>
                        </ul>
                    </li>
                    <li><strong>Help Desk Where Users Can Post Problems and Others Can Comment:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create a help desk feature where users can post their problems and receive assistance from other users or moderators.</li>
                            <li>Implement comment and moderation functionalities to manage discussions and provide solutions.</li>
                            <li>Allow users to search and filter help desk topics by category, tags, or keywords.</li>
                        </ul>
                    </li>
                    <li><strong>Notification Section After Buying Course for Latest Uploaded Videos:</strong>
                        <ul className="list-disc pl-5">
                            <li>Develop a notification system to alert users about new course updates, website updates, and other relevant information.</li>
                            <li>Implement push notifications or in-app notifications for timely updates.</li>
                            <li>Customize notification preferences for each user based on their interests and activity history.</li>
                        </ul>
                    </li>
                    <li><strong>Student Announcement Section for Course and Website Updates:</strong>
                        <ul className="list-disc pl-5">
                            <li>Create a dedicated section for student announcements where users can view updates related to courses and website changes.</li>
                            <li>Provide options for administrators to post announcements and for users to view them.</li>
                            <li>Allow users to subscribe to specific announcement categories or topics to receive relevant updates.</li>
                        </ul>
                    </li>

                </ul>

            </ul>
        </div>
    );
};

export default Description;