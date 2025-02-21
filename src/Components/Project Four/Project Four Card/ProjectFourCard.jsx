/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./ProjectFourCard.css";
import Slider from "../Slider/Slider";
import Description from "../Description/Description";

const ProjectFourCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div>
      <div
        className="relative xs:px-2 xs:pt-2 sm:px-3 pt-3 md:px-5 md:pt-5 lg:px-10 lg:pt-10 bg-[#070707] border border-[#353535] rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="rounded"
          src="https://i.ibb.co.com/SNtBQz3/Screenshot-2024-10-29-at-14-36-32-Power-Pulse-Fitness-Home5.png"
          alt=""
        />
        <div
          onClick={openModal}
          className={`project-info ${isHovered ? "show" : ""}`}
        >
          <div>
            <h1 className="xs:text-xl sm:text-2xl font-semibold font-poppins sm:mb-1 md:mb-1 lg:mb-3">
              Rimberio Automotive
            </h1>
            <p className="xs:text-sm sm:text-base font-lora semi-sm:mb-1 md:mb-0 lg:mb-2">
              Project was about precision and information.
            </p>
          </div>
          <MdOutlineArrowOutward
            className={`xs:text-2xl semi-sm:text-3xl lg:text-4xl rotate-icon ${
              isHovered ? "rotate-full" : ""
            }`}
          />
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <span
              className={`modal-close ${modalOpen ? "rotate" : ""}`}
              onClick={closeModal}
            >
              <ImCross />
            </span>
            {/* Modal content */}
            <img
              className="sm:px-4 xs:px-3 semi-sm:px-5 md:px-7 lg:px-[35px]"
              src="https://i.ibb.co/z4bksRM/Screenshot-2024-04-04-at-13-33-34-Rimberio-Automotive.png"
              alt=""
            />
            <div className="bg-white xs:px-3 sm:px-4 semi-sm:px-5 md:px-7 lg:px-[35px]">
              <div className="flex flex-col md:flex-row items-center gap-7 lg:gap-20">
                <div className="lg:flex-1 mt-10">
                  <h1
                    className="xs:text-xl sm:text-2xl semi-sm:text-3xl md:text-2xl lg:text-4xl font-poppins font-bold mb-5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Rimberio Automotive
                  </h1>
                  <p className="font-lora text-base text-[#0f0715] font-medium">
                    They are was greater open above shelter lets itself under
                    appear sixth open gathering made upon can't own above midst
                    gathering gathered he one us saying can't divide.
                  </p>
                </div>
                <div className="lg:flex-1">
                  <div className="flex flex-col md:flex-row xs:pr-[80px] sm:pr-[122px] semi-sm:pr-[165px] md:pr-0 md:items-center gap-5 lg:gap-40 mt-10">
                    <div style={{ whiteSpace: "nowrap" }}>
                      <h3 className="text-base font-poppins">Category</h3>
                      <p className="text-base font-lora font-medium">
                        Full Stack Project
                      </p>
                    </div>
                    <div style={{ whiteSpace: "nowrap" }}>
                      <h3 className="text-base font-poppins">Type</h3>
                      <p className="text-base font-lora font-medium">
                        Brand Car Shop
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-7 lg:gap-[168px] mt-10">
                    <div style={{ whiteSpace: "nowrap" }}>
                      <h3 className="text-base font-poppins">Start Date</h3>
                      <p className="text-base font-lora font-medium">
                        Octobar 17, 2023
                      </p>
                    </div>
                    <div style={{ whiteSpace: "nowrap" }}>
                      <h3 className="text-base font-poppins">End Date</h3>
                      <p className="text-base font-lora font-medium">
                        Octobar 21, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row md:items-center gap-5 md:gap-2 lg:gap-2 mt-10"
                style={{ whiteSpace: "nowrap" }}
              >
                <a href="https://rimberio-automotive-assignment.web.app/">
                  <div className="buttonContainer">
                    <button className="flex items-center gap-5 md:gap-0 lg:gap-2 text-white buttoninner px-7 py-3 rounded-full ">
                      <span className="text-sm lg:text-base font-lora font-semibold">
                        Live Preview
                      </span>
                      <MdOutlineArrowOutward className="text-xl arrowIcon" />
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/tonoy3125/rimberio-automotive-Client"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <div className="buttonContainer">
                    <button className="flex items-center gap-5 md:gap-0 lg:gap-2 text-white buttoninner px-7 py-3 rounded-full ">
                      <span className="lg:text-base font-lora font-semibold">
                        Client-Side-Repo
                      </span>
                      <MdOutlineArrowOutward className="text-xl arrowIcon" />
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/tonoy3125/rimberio-automotive-Server"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <div className="buttonContainer">
                    <button className="flex items-center gap-5 md:gap-0 lg:gap-2 text-white buttoninner px-7 py-3 rounded-full ">
                      <span className="lg:text-base font-lora font-semibold">
                        Server-Side-Repo
                      </span>
                      <MdOutlineArrowOutward className="text-xl arrowIcon" />
                    </button>
                  </div>
                </a>
              </div>
              <div className="mt-14 pb-7">
                <Slider />
              </div>
              <div className="pb-10">
                <Description />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFourCard;
