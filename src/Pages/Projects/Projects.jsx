import { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { ImCross } from "react-icons/im";
import './Projects.css'

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
        }
    }, [modalOpen]);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleModalClick = (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };


    return (
        <div className="pt-10 pb-10">
            <div className="max-w-6xl mx-auto">
                <h5 className="text-base font-medium text-white/50 text-center mb-5 font-poppins">Latest Works</h5>
                <h1 className="text-5xl font-medium text-center font-poppins"><span className="text-[#fff] mb-10">Explore My Popular</span> <span className="text-[#c9f31d]">Projects</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-20 xs:mx-4 md:mx-4">
                    <div className="relative xs:px-2 xs:pt-2 sm:px-3 pt-3 md:px-5 md:pt-5 lg:px-10 lg:pt-10 bg-[#070707] border border-[#353535] rounded-xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}

                    >
                        <img className="rounded" src="https://i.ibb.co/HNJxcRs/Screenshot-2024-03-30-at-02-56-46-BD-Quick-School1.png" alt="" />
                        <div onClick={openModal} className={`project-info ${isHovered ? 'show' : ''}`}>
                            <div>
                                <h1 className='xs:text-xl sm:text-2xl font-semibold font-poppins sm:mb-1 md:mb-1 lg:mb-3'>BD Quick School</h1>
                                <p className='xs:text-sm sm:text-base font-lora semi-sm:mb-1 md:mb-0 lg:mb-2'>Project was about precision and information.</p>
                            </div>
                            <MdOutlineArrowOutward className={`xs:text-2xl semi-sm:text-3xl lg:text-4xl rotate-icon ${isHovered ? 'rotate-full' : ''}`} />

                        </div>



                    </div>
                </div>
            </div>
            {modalOpen &&
                <div className="modal-overlay" onClick={handleModalClick}>
                    <div className="modal-content">
                        <span className={`modal-close ${modalOpen ? 'rotate' : ''}`} onClick={closeModal}><ImCross /></span>
                        {/* Modal content */}
                        <img className=' semi-sm:px-5 md:px-7 lg:px-[40px]' src="https://i.ibb.co/gd2dpPv/Screenshot-2024-03-28-at-13-57-06-BD-Quick-School.png" alt="" />
                        <div className='bg-white semi-sm:px-5 md:px-7 lg:px-[40px]'>
                            <div className='flex flex-col md:flex-row items-center gap-7 lg:gap-20'>
                                <div className='lg:flex-1 mt-10'>
                                    <h1 className='semi-sm:text-3xl md:text-2xl lg:text-4xl font-poppins font-bold mb-5' style={{ whiteSpace: "nowrap" }}>Bd Quick School</h1>
                                    <p className='font-lora text-base text-[#0f0715] font-medium'>They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.</p>
                                </div>
                                <div className='lg:flex-1'>
                                    <div className='flex flex-col semi-sm:flex-row  md:items-center gap-5 lg:gap-40 mt-10'>
                                        <div style={{ whiteSpace: "nowrap" }}>
                                            <h3 className='text-base font-poppins'>Category</h3>
                                            <p className='text-base font-lora font-medium'>Full Stack  Project</p>
                                        </div>
                                        <div style={{ whiteSpace: "nowrap" }}>
                                            <h3 className='text-base font-poppins'>Type</h3>
                                            <p className='text-base font-lora font-medium'>Education Platform</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col semi-sm:flex-row md:items-center gap-7 lg:gap-[167px] mt-10'>
                                        <div>
                                            <h3 className='text-base font-poppins'>Start Date</h3>
                                            <p className='text-base font-lora font-medium'>January 20, 2024</p>
                                        </div>
                                        <div>
                                            <h3 className='text-base font-poppins'>End Date</h3>
                                            <p className='text-base font-lora font-medium'>March 10, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center semi-sm:gap-5 md:gap-2 lg:gap-2 mt-10' style={{ whiteSpace: "nowrap" }}>
                                <a href="https://quick-school-client.netlify.app/">
                                    <div className='buttonContainer'>
                                        <button className='flex items-center gap-5 md:gap-0 lg:gap-2 text-white buttoninner px-7 py-3 rounded-full '>
                                            <span className='text-sm lg:text-base font-lora font-semibold'>Live Preview</span>
                                            <MdOutlineArrowOutward className='text-xl arrowIcon' />
                                        </button>
                                    </div>
                                </a>
                                <a href="https://github.com/Shiham123/bd-quick-school-client" style={{ whiteSpace: "nowrap" }}>
                                    <div className='buttonContainer'>
                                        <button className='flex items-center gap-5 md:gap-0 lg:gap-2 text-white buttoninner px-7 py-3 rounded-full '>
                                            <span className='lg:text-base font-lora font-semibold'>Client-Side-Repo</span>
                                            <MdOutlineArrowOutward className='text-xl arrowIcon' />
                                        </button>
                                    </div>
                                </a>
                                <a href="https://github.com/Shiham123/bd-quick-school-server" style={{ whiteSpace: "nowrap" }}>
                                    <div className='buttonContainer'>
                                        <button className='flex items-center gap-5 md:gap-0 lg:gap-2 text-white buttoninner px-7 py-3 rounded-full '>
                                            <span className='lg:text-base font-lora font-semibold'>Server-Side-Repo</span>
                                            <MdOutlineArrowOutward className='text-xl arrowIcon' />
                                        </button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Projects;