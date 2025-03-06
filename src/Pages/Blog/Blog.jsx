/* eslint-disable react-hooks/exhaustive-deps */
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import "./Blog.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        // threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    // Cleanup
    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  return (
    <div
      id="blog"
      ref={blogRef}
      className="pb-28 pt-32 bg-[#070707] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h5
          initial={{ y: -50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="text-base font-medium text-white/50 text-center mb-5 font-poppins"
        >
          New & Blog
        </motion.h5>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium text-center px-2 font-poppins mb-20"
        >
          <span className="text-[#fff]">Latest News & </span>{" "}
          <span className="text-[#c9f31d]">Blog</span>
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.4 }}
            className="border border-[#353535] hover:border-[#c9f31d] bg-[#292828] lg:w-[630px] rounded-[15px] flex flex-col md:flex-row items-center gap-10 xs:pl-2 xs:pr-2 xs:pt-2 semi-sm:pl-3 semi-sm:pr-3 semi-sm:pt-3 md:pl-2 md:pt-2 md:pb-2 md:pr-10 card-container xs:mx-3 sm:mx-4 semi-sm:mx-5 md:mx-4 lg:mx-0 cursor-pointer"
          >
            <div className="">
              <img
                className="md:max-w-60 md:h-56 rounded-[10px] object-cover"
                src="https://i.ibb.co/XypBGfh/blog-09-min-768x417.jpg"
                alt=""
              />
            </div>
            <div className="xs:mx-1 semi-sm:mx-2 md:mx-0">
              <div className="flex items-center gap-3 mb-4 mt-5">
                <FaCalendarAlt className="text-base text-white" />
                <p className="font-lora text-[#b1b1b1]">MAY 15, 2024</p>
              </div>
              <h3 className="xs:text-lg sm:text-xl semi-sm:text-[22px] font-lora font-bold text-white md:w-96">
                Avoid These Common Mistakes When Creating Websites with ReactJS
              </h3>
              {/* <Link to="/blogdetails">
                
              </Link> */}
              <a href="https://medium.com/@shaifshajedt/avoid-these-common-mistakes-when-creating-websites-with-reactjs-47c240ce7935">
                <p className="text-[#c9f31d] flex items-center gap-2 mt-6 mb-5">
                  <span className="text-base font-semibold font-lora text">
                    Read More
                  </span>
                  <span>
                    <MdOutlineArrowOutward className="text-xl" />
                  </span>
                </p>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.6 }}
            className="border border-[#353535] hover:border-[#c9f31d] bg-[#292828] lg:w-[630px] rounded-[15px] flex flex-col md:flex-row items-center gap-10 xs:pl-2 xs:pr-2 xs:pt-2 semi-sm:pl-3 semi-sm:pr-3 semi-sm:pt-3 md:pl-2 md:pt-2 md:pb-2 md:pr-10 card-container xs:mx-3 sm:mx-4 semi-sm:mx-5 md:mx-4 lg:mx-0 cursor-pointer"
          >
            <div className="">
              <img
                className="md:max-w-60 md:h-56 rounded-[10px] object-cover"
                src="https://i.ibb.co/R3CjrSj/blog-02-min-768x417.jpg"
                alt=""
              />
            </div>
            <div className="xs:mx-1 semi-sm:mx-2 md:mx-0">
              <div className="flex items-center gap-3 mb-4 mt-8">
                <FaCalendarAlt className="text-base text-white" />
                <p className="font-lora text-[#b1b1b1]">May 12, 2024</p>
              </div>
              <h3 className="xs:text-lg sm:text-xl semi-sm:text-[22px] font-lora font-bold text-white md:w-96">
                The Beginner’s Guide to <br /> MongoDB Aggregation
              </h3>
              {/* <Link to="/blogdetails">
                
              </Link> */}
              <a href="https://medium.com/@shaifshajedt/the-beginners-guide-to-mongodb-aggregation-71e738a85340">
                <p className="text-[#c9f31d] flex items-center gap-2 mt-6 mb-8">
                  <span className="text-base font-semibold font-lora text">
                    Read More
                  </span>
                  <span>
                    <MdOutlineArrowOutward className="text-xl" />
                  </span>
                </p>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.8 }}
            className="border border-[#353535] hover:border-[#c9f31d] bg-[#292828] lg:w-[630px] rounded-[15px] flex flex-col md:flex-row items-center gap-10 xs:pl-2 xs:pr-2 xs:pt-2 semi-sm:pl-3 semi-sm:pr-3 semi-sm:pt-3 md:pl-2 md:pt-2 md:pb-2 md:pr-10 card-container xs:mx-3 sm:mx-4 semi-sm:mx-5 md:mx-4 lg:mx-0 cursor-pointer"
          >
            <div className="">
              <img
                className="md:max-w-60 md:h-56 rounded-[10px] object-cover"
                src="https://i.ibb.co/rcBrmXC/blog-04-min-768x417.jpg"
                alt=""
              />
            </div>
            <div className="xs:mx-1 semi-sm:mx-2 md:mx-0">
              <div className="flex items-center gap-3 mb-4 mt-8">
                <FaCalendarAlt className="text-base text-white" />
                <p className="font-lora text-[#b1b1b1]">April 30, 2024</p>
              </div>
              <h3 className="xs:text-lg sm:text-xl semi-sm:text-[22px] font-lora font-bold text-white md:w-96">
                Mastering React: Beginner to <br /> Pro Guide
              </h3>
              {/* <Link to="/blogdetails">
                
              </Link> */}
              <a href="https://medium.com/@shaifshajedt/mastering-react-a-comprehensive-guide-for-beginners-to-professional-944679b97147">
                <p className="text-[#c9f31d] flex items-center gap-2 mt-6 mb-8">
                  <span className="text-base font-semibold font-lora text">
                    Read More
                  </span>
                  <span>
                    <MdOutlineArrowOutward className="text-xl" />
                  </span>
                </p>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 1 }}
            className="border border-[#353535] hover:border-[#c9f31d] bg-[#292828] lg:w-[630px] rounded-[15px] flex flex-col md:flex-row items-center gap-10 xs:pl-2 xs:pr-2 xs:pt-2 semi-sm:pl-3 semi-sm:pr-3 semi-sm:pt-3 md:pl-2 md:pt-2 md:pb-2 md:pr-10 card-container xs:mx-3 sm:mx-4 semi-sm:mx-5 md:mx-4 lg:mx-0 cursor-pointer"
          >
            <div className="">
              <img
                className="md:max-w-60 md:h-56 rounded-[10px] object-cover"
                src="https://i.ibb.co/gF38mtp/blog-05-min-768x417.jpg"
                alt=""
              />
            </div>
            <div className="xs:mx-1 semi-sm:mx-2 md:mx-0">
              <div className="flex items-center gap-3 mb-4 mt-8">
                <FaCalendarAlt className="text-base text-white" />
                <p className="font-lora text-[#b1b1b1]">April 17, 2024</p>
              </div>
              <h3 className="xs:text-lg sm:text-xl semi-sm:text-[22px] font-lora font-bold text-white md:w-96">
                JavaScript Beginner to Pro <br /> Guide
              </h3>
              {/* <Link to="/blogdetails">
                
              </Link> */}
              <a href="https://medium.com/@shaifshajedt/mastering-javascript-a-comprehensive-guide-for-beginners-d3f14059f2fc">
                <p className="text-[#c9f31d] flex items-center gap-2 mt-6 mb-8">
                  <span className="text-base font-semibold font-lora text">
                    Read More
                  </span>
                  <span>
                    <MdOutlineArrowOutward className="text-xl" />
                  </span>
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
