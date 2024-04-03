import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";


const ProjectTwoCard = () => {
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
        <div>
            <div className="relative xs:px-2 xs:pt-2 sm:px-3 pt-3 md:px-5 md:pt-5 lg:px-10 lg:pt-10 bg-[#070707] border border-[#353535] rounded-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

            >
                <img className="rounded" src="https://i.ibb.co/PhpNs2s/Screenshot-2024-04-03-at-13-55-33-Evergreen-Estates-Home.png" alt="" />
                <div onClick={openModal} className={`project-info ${isHovered ? 'show' : ''}`}>
                    <div>
                        <h1 className='xs:text-xl sm:text-2xl font-semibold font-poppins sm:mb-1 md:mb-1 lg:mb-3'>BD Quick School</h1>
                        <p className='xs:text-sm sm:text-base font-lora semi-sm:mb-1 md:mb-0 lg:mb-2'>Project was about precision and information.</p>
                    </div>
                    <MdOutlineArrowOutward className={`xs:text-2xl semi-sm:text-3xl lg:text-4xl rotate-icon ${isHovered ? 'rotate-full' : ''}`} />

                </div>



            </div>
        </div>
    );
};

export default ProjectTwoCard;