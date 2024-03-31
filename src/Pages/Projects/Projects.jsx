import { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
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
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-20">
                    <div className="relative px-10 pt-16 bg-[#070707] border border-[#353535] rounded-xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}

                    >
                        <img className="rounded" src="https://i.ibb.co/HNJxcRs/Screenshot-2024-03-30-at-02-56-46-BD-Quick-School1.png" alt="" />
                        <div onClick={openModal} className={`project-info ${isHovered ? 'show' : ''}`}>
                            <div>
                                <h1 className='text-2xl font-semibold font-poppins mb-3'>BD Quick School</h1>
                                <p className='text-base font-lora mb-2'>Project was about precision and information.</p>
                            </div>
                            <MdOutlineArrowOutward className={`text-4xl rotate-icon ${isHovered ? 'rotate-full' : ''}`} />

                        </div>



                    </div>
                </div>
            </div>
            {modalOpen &&
                <div className="modal-overlay" onClick={handleModalClick}>
                    <div className="modal-content">
                        <span className="modal-close" onClick={closeModal}>&times;</span>
                        {/* Modal content */}
                        <img className='max-w-5xl' src="https://i.ibb.co/gd2dpPv/Screenshot-2024-03-28-at-13-57-06-BD-Quick-School.png" alt="" />
                        <div className='flex gap-20'>
                            <div className='flex-1'>
                                <h1 className='text-4xl font-poppins font-bold'>Bd Quick School</h1>
                                <p className='font-lora text-base text-[#0f0715] font-medium'>They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.</p>
                            </div>
                            <div className='flex-1'>
                                <div className='flex items-center gap-40'>
                                    <div>
                                        <h3 className='text-base font-poppins'>Category</h3>
                                        <p className='text-base font-lora font-medium'>Full Stack  Project</p>
                                    </div>
                                    <div>
                                        <h3 className='text-base font-poppins'>Type</h3>
                                        <p className='text-base font-lora font-medium'>Education Platform</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[167px]'>
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
                    </div>
                </div>
            }
        </div>
    );
};

export default Projects;