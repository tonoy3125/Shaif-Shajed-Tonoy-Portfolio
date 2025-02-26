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
        Aqua Auto Car Booking System is a simple and user-friendly web app for
        booking car washes and services. Customers can browse available
        services, check details, and book a time slot with ease. The Home Page
        provides clear navigation and a quick booking option. Users can sign up
        securely and manage their profile, past bookings, and upcoming
        appointments from a personal dashboard. Administrators have a special
        dashboard to manage services, bookings, and user roles efficiently. This
        system makes car wash and service bookings hassle-free for both
        customers and admins, ensuring smooth and organized operations. Whether
        you're booking a quick wash or managing multiple services, Aqua Auto
        makes the process easy and convenient for everyone.
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
                A welcoming homepage with a visually appealing hero section that
                highlights key pages like Services, Booking, and Login, along
                with an introduction and visuals that clearly show what the car
                wash service is all about
              </li>
              <li>
                Highlight up to six of your best services, showcasing them with
                clear images and short descriptions. This section makes it easy
                for customers to quickly understand the most popular offerings
                you have, allowing them to see what they can expect from your
                services in a simple, attractive way
              </li>
              <li>
                The Review Section allows users to leave feedback and rate the
                site with a 1-5 star rating system. A text area is provided for
                writing reviews. Once a review is submitted, the average site
                rating is displayed along with the last two user reviews (rating
                + feedback). A "See All Reviews" button redirects to a page with
                all reviews.If the user is not logged in, a black overlay with a
                "Login" button is displayed above the review section. Clicking
                the button redirects them to the login page. After logging in,
                the user is redirected to the homepage. If the user is already
                logged in, the overlay will not appear.
              </li>
              <li>
                A responsive navigation bar that includes a logo, site name, and
                links to important sections like Services, Booking, About Us,
                Contact Us, and Dashboard.
              </li>
              <li>
                Contains important links to contact information, social media
                platforms, terms of service, privacy policy, and other relevant
                resources.
              </li>
            </ul>
          </li>
          <li>
            <strong>User Authentication Pages:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can sign up and will automatically be assigned the "USER"
                role by default. Initially, there will be an admin in the
                database, and this admin will have the ability to promote other
                users to the "ADMIN" role when necessary. The system allows
                users to create new accounts with a simple and secure
                registration process. It also includes form validation to ensure
                that all required fields are correctly filled out. After the
                registration attempt, the system will display appropriate
                success or error messages based on whether the process was
                completed successfully or if any issues occurred.
              </li>
              <li>
                Users can log in by entering their email and password, and the
                system will use token-based authentication to verify their
                identity. If there are any issues with the login process, such
                as incorrect credentials or other errors, the system will
                provide clear and helpful error messages to guide the user in
                resolving the issue. This ensures a smooth and secure login
                experience.
              </li>
            </ul>
          </li>
          <li>
            <strong>Services Page:</strong>
            <ul className="list-disc pl-5">
              <li>
                The service page shows a complete list of all available car wash
                services, each with detailed descriptions, prices, and the time
                it takes to complete. Users can easily search for specific
                services, filter them based on criteria such as price or
                duration, and sort them to find the options that best suit their
                needs. This helps users quickly find the right service based on
                their preferences and budget
              </li>
            </ul>
          </li>
          <li>
            <strong>Service Details Page:</strong>
            <ul className="list-disc pl-5">
              <li>
                The service details page provides complete information about the
                selected service, including its features and available time
                slots. By default, the page displays the time slots for the
                current date, making it easy for users to see the options right
                away. Time slots that are already booked will be disabled and
                unclickable to prevent any confusion, while available slots will
                remain clickable, allowing users to choose their preferred time.
                Additionally, users can use an optional calendar feature to
                select a different date, and the time slots available for that
                specific date will be displayed. Once a time slot is selected, a
                "Book This Service" button will appear, enabling users to
                confirm their booking quickly and easily.
              </li>
            </ul>
          </li>
          <li>
            <strong>Booking Page:</strong>
            <ul className="list-disc pl-5">
              <li>
                The booking page is organized into two sections displayed side
                by side for a clear and user-friendly experience.
              </li>
              <li>
                On the Left Side, users will see an overview of the selected
                service and time slot presented in an attractive and visually
                appealing design. This section provides a quick summary of their
                choice, ensuring clarity before proceeding with the booking
                process.
              </li>
              <li>
                On the Right Side, there is a form for users to fill in their
                personal information, such as name and email, with the selected
                time slot automatically filled in for convenience. This section
                also features a "Pay Now" button for seamless payment
                processing.
              </li>
              <li>
                When the "Pay Now" button is clicked, the user is redirected to
                the secure AAMARPAY payment gateway to complete the transaction.
                Once the payment is successful, the system automatically updates
                the selected time slot’s status to "booked" to prevent double
                bookings. Finally, the user is redirected to a success page,
                confirming their booking and providing any necessary follow-up
                details.
              </li>
            </ul>
          </li>
          <li>
            <strong>Admin Product Management:</strong>
            <ul className="list-disc pl-5">
              <li>
                The admin dashboard provides an overview of recent bookings,
                user management, slot management, and service management.
              </li>
              <li>Only admin users can access the dashboard</li>
              <li>Service details are shown in a table for easy viewing</li>
              <li>
                An "Add Service" button lets admins add new services. Clicking
                the button opens a form in a modal. After filling out and
                submitting the form, the modal closes, and the new service is
                instantly added to the table for a smooth experience.
              </li>
              <li>
                Each row in the table has buttons to update or delete services.
              </li>
              <li>
                Clicking the update button opens a modal with pre-filled details
                of the selected service, making editing simple and quick.
              </li>
              <li>
                A confirmation pop-up appears before deleting a service to
                confirm the action.
              </li>
              <li>Admins can create and manage slots for services.</li>
              <li>
                Slot statuses can be updated individually, except for booked
                slots.
              </li>
              <li>
                Admins can toggle slot statuses between "AVAILABLE" and
                "CANCELLED"
              </li>
              <li>
                Admins can view user bookings in a table for better
                organization.
              </li>
              <li>
                Admins can also manage the user list and update user roles.
              </li>
            </ul>
          </li>
          <li>
            <strong>User Dashboard:</strong>
            <ul className="list-disc pl-5">
              <li>
                The user dashboard is designed to provide a clear and organized
                view of bookings and account information.
              </li>
              <li>
                Users can easily update their profiles and manage personal
                information, such as their name, email, and contact details,
                ensuring their account stays up to date.
              </li>
              <li>
                A complete list of all past bookings is displayed in a clean,
                tabular format, making it simple for users to review their
                booking history.
              </li>
              <li>
                Future bookings are presented in card format for a visually
                appealing layout. Each card includes key details about the
                service and a countdown timer that shows the time remaining
                until the booking begins.
              </li>
              <li>
                Once a booking is created, users will see a countdown timer that
                tracks the time left until their selected slot begins. If a user
                has multiple bookings, only the countdown for the next immediate
                slot will be shown in the navbar, ensuring they are always aware
                of their most urgent appointment. Additionally, in the "Upcoming
                Bookings" section, each booking card will feature its own
                countdown timer, helping users stay on top of all their upcoming
                commitments. This ensures a smooth and user-friendly experience.
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
