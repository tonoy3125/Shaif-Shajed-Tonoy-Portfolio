

const Description = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Technology</h1>
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
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Project Description</h1>
            <p className="text-base font-lora font-medium ">Job Recruiter is an online platform designed for job seekers and employers alike. It offers a simple and efficient way to find jobs and post job listings. Job seekers can browse through various job opportunities and submit bids for the ones that match their skills and interests. Meanwhile, employers can easily add job listings and connect with potential candidates. The platform streamlines the job search process, making it accessible and straightforward for everyone involved. Whether you're looking for your next career move or seeking to fill a vacant position, CareerHub Connect provides a user-friendly solution for all your job-related needs.</p>
            <h1 className="text-4xl font-bold font-poppins mt-5 mb-5">Unique Features</h1>
            <ul className="font-lora">
                <ul className="list-disc pl-5">
                    <li><strong>Navigation Bar:</strong>
                        <ul className="list-disc pl-5">
                            <li>Home: Display brand images and names.</li>
                            <li>Add Product: Allow users to add new products.</li>
                            <li>My Cart: Show added products.</li>
                            <li>Login: Enable user authentication via Google, GitHub, or email. Toggle between login and registration forms.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Home Page:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display 6 brand images and names.</li>
                            <li>Clicking a brand shows its products and banner slider.</li>
                            <li>Display a message for brands with no available products.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Product Cards:</strong>
                        <ul className="list-disc pl-5">
                            <li>Show product details and an update button.</li>
                            <li>"Details" opens a detailed product page.</li>
                            <li>"Update" opens a form for product information updates (private route).</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Product Details Page:</strong>
                        <ul className="list-disc pl-5">
                            <li>Display comprehensive product information.</li>
                            <li>Include an "Add to Cart" button.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-disc pl-5">
                    <li><strong>Add Product Page:</strong>
                        <ul className="list-disc pl-5">
                            <li>A form for users to add new products.</li>
                            <li>Store products in the database and display them in the brand's product list.</li>
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
                            <li>Configure private routes for add product, my cart, product details, and update pages.</li>
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
                    <li><strong>Toggle between Dark and Light Mode:</strong>
                        <ul className="list-disc pl-5">
                            <li>Users can toggle between dark and light modes on the home page.</li>
                        </ul>
                    </li>
                </ul>



            </ul>
        </div>
    );
};

export default Description;