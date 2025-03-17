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
            <li>Next Js</li>
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
        OnTheGo is a simple travel app where people share travel stories, tips,
        and experiences. Users can create profiles, follow other travelers, and
        explore new places. The app helps users find useful travel advice and
        connect with a travel-loving community. Travelers can post stories, add
        pictures, and share insights. Others can like, comment, and upvote the
        best posts. OnTheGo also offers premium content with exclusive travel
        guides. Verified users get access to special tips. With easy search,
        filters, and secure login, users can quickly find helpful content.
        OnTheGo makes travel planning fun and simple for everyone!
      </p>
      <h1 className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-4xl font-bold font-poppins mt-5 mb-5">
        Unique Features
      </h1>
      <ul className="font-lora">
        <ul className="list-disc pl-5">
          <li>
            <strong>User Authentication Pages:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can sign up and will automatically be assigned the "user"
                role by default. Initially, there will be an admin in the
                database, and this admin will have the ability to promote other
                users to the "admin" role when necessary. The system allows
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
            <strong>User Profile Management:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can update their profiles, including adding a profile
                picture. The "My Profile" section shows posts, followers, and
                following, similar to Facebook or X. Users can see follower and
                following counts to track connections easily
              </li>
              <li>
                Users can follow or unfollow others anytime. To encourage
                engagement, posts can receive upvotes. Once a user gets at least
                one upvote, they can apply for profile verification.
                Verification requires an online payment through AAMARPAY or
                Stripe. After payment, a verified badge appears next to their
                name.
              </li>
              <li>
                Verified users get access to exclusive premium content with
                special travel tips and guides. This feature makes the platform
                more engaging and rewarding for active users.
              </li>
              <li>
                With a simple and user-friendly interface, OnTheGo helps
                travelers connect, share experiences, and access valuable travel
                insights. The platform offers a smooth experience for managing
                profiles, building a follower base, and exploring premium
                content.
              </li>
            </ul>
          </li>
          <li>
            <strong>Post Creation & Sharing:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can easily create and share travel tips, guides, and
                stories. They can write detailed posts using a rich text editor
                or Markdown for better formatting. They can also attach images
                to make their posts more engaging and visually appealing
              </li>
              <li>
                To help users find content easily, posts can be categorized
                under topics like Adventure, Business Travel, Exploration, and
                more. This helps travelers browse specific interests and
                discover relevant posts.
              </li>
              <li>
                The post creation interface is designed as a modal, ensuring a
                smooth and distraction-free experience. Users can also edit or
                delete their posts anytime.
              </li>
              <li>
                Some posts can be marked as Premium, which means only verified
                users can access them. This feature adds value to exclusive
                travel content and encourages users to become verified.
              </li>
            </ul>
          </li>
          <li>
            <strong>Upvote & Downvote System:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can upvote or downvote posts, making it easy to find the
                best travel content. Posts with more upvotes appear higher,
                helping others discover useful tips, guides, and stories. A
                sorting feature highlights the most upvoted posts, ensuring
                helpful content gets noticed first. By voting on posts, users
                support great content and help fellow travelers find the best
                advice and experiences. This interactive feature makes the
                platform more engaging and user-friendly for travel lovers
              </li>
            </ul>
          </li>
          <li>
            <strong>Commenting System:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can leave comments on posts, making it easy to share
                thoughts and interact with others. They can also edit or delete
                their own comments anytime.If a post owner comments on their own
                post, they can delete their comment, but editing is optional.
                This gives users more control over their conversations. To
                encourage discussions, users can reply to other comments, making
                conversations more engaging and interactive. This feature helps
                travelers share ideas, ask questions, and connect with others in
                a meaningful way.With a simple and user-friendly interface,
                commenting is easy, keeping travel discussions fun and engaging
              </li>
            </ul>
          </li>
          <li>
            <strong>Payment System:</strong>
            <ul className="list-disc pl-5">
              <li>
                The platform integrates with Aamarpay, allowing users to easily
                make payments for access to premium content. This includes
                exclusive travel guides, destination tips, and verified user
                privileges. With this integration, users can securely pay to
                unlock valuable content that can enhance their travel planning.
                Once the payment is made, they can enjoy special features like
                access to expert tips, detailed travel guides, and the ability
                to become a verified user. The payment process is simple and
                safe, ensuring that users can make transactions without any
                hassle. After paying, users get instant access to the premium
                content, helping them make better travel decisions and plan
                unforgettable trips. By using Aamarpay, users have a smooth and
                reliable way to access exclusive features, enhancing their
                overall experience.
              </li>
            </ul>
          </li>
          <li>
            <strong>News Feed:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can enjoy a dynamic news feed that displays the latest
                travel posts from the community, keeping the content fresh and
                up-to-date. With infinite scrolling, more content loads
                automatically as users scroll down the page, offering a smooth
                and uninterrupted browsing experience. Users can also filter and
                search posts by category or user, making it easy to find
                specific content or explore posts from favorite users. Whether
                it's adventure travel, business trips, or destination guides,
                users can quickly narrow down the content.With infinite
                scrolling, filtering, and sorting options, users can easily
                discover and engage with the most relevant and popular travel
                content.Users can download PDF versions of travel guides or
                posts, allowing them to access the content offline anytime
              </li>
            </ul>
          </li>
          <li>
            <strong>Following System:</strong>
            <ul className="list-disc pl-5">
              <li>
                Users can follow other travelers, allowing them to stay updated
                on their latest posts, tips, and experiences. This helps build
                connections and keeps users engaged with the travel community
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
