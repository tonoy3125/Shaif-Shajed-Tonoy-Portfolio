/* eslint-disable react/no-unescaped-entities */

const Description = () => {
  return (
    <div>
      <h1 className="xs:text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">
        Technology
      </h1>
      <div className="flex flex-wrap items-center font-lora font-medium">
        <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <ul className="list-disc ml-4">
            <li>React</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <ul className="list-disc ml-4">
            <li>Redux</li>
            <li>Redux Toolkit</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <ul className="list-disc ml-4">
            <li>Shadcn Ui</li>
            <li>Ant Design</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <ul className="list-disc ml-4">
            <li>Cloudinary</li>
            <li>JWT</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <ul className="list-disc ml-4">
            <li>aamarPay</li>
            <li>Express js</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/6 mb-4 lg:mb-0">
          <ul className="list-disc ml-4">
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
      <h1 className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">
        Project Description
      </h1>
      <p className="text-base font-lora font-medium ">
        At BD Quick School, we believe in the power of knowledge to make a
        difference in people's lives. Our platform is crafted to offer a
        seamless and enjoyable learning experience for individuals from all
        walks of life, regardless of age or background. Whether you're a student
        looking to excel in your studies, a professional aiming to enhance your
        skills, or simply someone with a passion for lifelong learning, we cater
        to everyone's needs. With our user-friendly interface and engaging
        content, discovering new concepts and expanding your knowledge has never
        been easier. Join us on our journey to unlock the endless possibilities
        that education has to offer. Together, let's embark on a fulfilling
        learning experience that will empower you to achieve your goals and
        thrive in today's ever-changing world.
      </p>
      <h1 className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">
        Unique Features
      </h1>
      <ul className="font-lora">
        <ul className="list-disc pl-5">
          <li>
            <strong>User Interface and Navigation:</strong>
            <ul className="list-disc pl-5">
              <li>
                Develop a welcoming homepage with a visually appealing hero
                section highlighting the brand and featured content.
              </li>
              <li>
                Implement a category section displaying product categories with
                images/icons, allowing users to explore products by category.
                Clicking a category redirects users to the Products page with
                the selected category filter applied by default.
              </li>
              <li>
                Showcase Featured Products with images, names, prices, and a
                button to view more details. Include an "Explore More" button to
                navigate to the full product listings page.
              </li>
              <li>
                Provide a structured header with a responsive navigation bar
                featuring a logo, site name, and links to key sections like
                Home, Products, Cart, Wishlist, and more.
              </li>
              <li>
                Include a footer with essential links to contact information,
                social media, terms of service, privacy policy, and relevant
                resources
              </li>
            </ul>
          </li>
          <li>
            <strong>Product and Cart Management:</strong>
            <ul className="list-disc pl-5">
              <li>
                Displays all available products in a grid or list view, each
                with its image, name, price, and a button to view more details.
              </li>
              <li>
                The design supports multiple images per product, with one
                featured image as default and others available for viewing on
                click.
              </li>
              <li>
                Enables users to search for products by name, with real-time
                search suggestions and results.
              </li>
              <li>
                Users can select multiple categories at once. Products matching
                any of the selected categories will be shown. For example,
                selecting "Cardio" and "Strength" categories will display
                products from both categories.
              </li>
              <li>
                Users can filter products based on their price range. The filter
                allows custom input for both minimum and maximum prices.
              </li>
              <li>
                Users can sort products by price in both ascending and
                descending order.
              </li>
              <li>
                A quick way to reset all applied filters and return to the
                default view of all products.
              </li>
            </ul>
          </li>
          <li>
            <strong>Product Details Page:</strong>
            <ul className="list-disc pl-5">
              <li>
                Displays all product details, including name, price, stock
                status, category, and description. Features multiple images with
                a carousel or thumbnails for easy viewing, allowing users to
                explore different product angles
              </li>
              <li>
                Users can add the product to their cart directly from the
                details page.
              </li>
              <li>
                The cart displays a detailed list of added products, including
                name, image, and price. Users can adjust quantity within stock
                limits using controls. A remove button allows deletion of items,
                with a confirmation prompt before removal to prevent accidental
                deletions, ensuring a smooth and controlled shopping experience
              </li>
            </ul>
          </li>
          <li>
            <strong>Cart Page:</strong>
            <ul className="list-disc pl-5">
              <li>
                Displays a list of added products with name, image, and price.
                Users can increase or decrease quantity within stock limits
                using controls. A remove button allows item deletion with a
                confirmation prompt to prevent accidental removal, ensuring a
                smooth and hassle-free shopping experience.
              </li>
              <li>
                Displays the total price dynamically, adjusting as users change
                product quantities or remove items.
              </li>
              <li>
                Includes breakdowns for taxes, shipping costs (if any), and a
                final total price.
              </li>
              <li>
                Activated only if all items in the cart are in stock. If any
                item is out of stock, the button will be disabled.
              </li>
              <li>
                Clicking this button redirects the user to the Checkout Page to
                finalize the order.
              </li>
            </ul>
          </li>
          <li>
            <strong>Checkout Page:</strong>
            <ul className="list-disc pl-5">
              <li>
                Collects user information including name, email, phone number,
                and delivery address
              </li>
              <li>
                Includes validation to ensure all fields are filled correctly
                before proceeding
              </li>
              <li>
                Users can select this option and place the order. The system
                will confirm the order, redirect the user to a success page, and
                automatically adjust the stock for the purchased items.
              </li>
              <li>
                For online payments, users can select Stripe and be redirected
                to the secure Stripe payment gateway. After successful payment,
                the user is redirected to a success page and product stock is
                updated accordingly.
              </li>
            </ul>
          </li>
          <li>
            <strong>Wishlist Management:</strong>
            <ul className="list-disc pl-5">
              <li>
                Logged-in users can add products to their wishlist, and these
                are saved for each user individually. The wishlist persists
                across sessions and devices, allowing users to access it
                anytime.
              </li>
              <li>
                Users can add or remove products from their wishlist with
                changes reflected instantly. The wishlist button toggles between
                "Add to Wishlist" and "Remove from Wishlist" based on the
                product’s presence in the wishlist..
              </li>
            </ul>
          </li>
          <li>
            <strong>Admin Product Management:</strong>
            <ul className="list-disc pl-5">
              <li>
                Admins have access to a table displaying all products with
                relevant details such as product name, price, stock quantity,
                and category. The table also includes action buttons to update
                or delete each product
              </li>
              <li>
                Admins can add products using a form with name, price, stock
                quantity, category, and description. Supports image uploads via
                Cloudinary or direct URL input, ensuring easy and flexible
                product management for a seamless inventory update process.
              </li>
              <li>
                Admins can update existing products with prefilled data from the
                database. After updating, the changes are reflected in real-time
                on the frontend..
              </li>
              <li>
                Admins can delete a product, with a confirmation prompt to
                prevent accidental deletion. Once confirmed, the product is
                removed from both the database and the UI.
              </li>
            </ul>
          </li>
          <li>
            <strong>Error Handling:</strong>
            <ul className="list-disc pl-5">
              <li>
                All error scenarios, such as invalid form inputs, failed payment
                attempts, or out-of-stock items, are handled gracefully with
                descriptive error messages shown to the user.
              </li>
              <li>
                Frontend form validations are in place for user details, product
                additions, and checkout processes, ensuring that required fields
                are completed before submission.
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Description;
