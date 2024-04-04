

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
            <p className="text-base font-lora font-medium ">Rimberio Automotive is an online platform where you can buy and sell brand cars and car parts. Whether you're looking to upgrade your vehicle or find parts for repairs, Rimberio Automotive makes the process easy and convenient. Browse through a wide selection of brand cars and parts, all in one place. Sellers can list their cars and parts for sale, reaching a wide audience of potential buyers. Buyers can explore various options and make purchases securely through the platform. With user-friendly features and straightforward navigation, Rimberio Automotive simplifies the car buying and selling experience for everyone. Whether you're a car enthusiast or just in need of a reliable vehicle, Rimberio Automotive has something for you.</p>
            <h1 className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">Unique Features</h1>
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