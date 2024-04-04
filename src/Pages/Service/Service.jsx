import { FiArrowUpRight } from "react-icons/fi";
import './Service.css'

const Service = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center">
                <div className="flex items-center gap-28  px-10 py-10 service-card">
                    <div className="flex items-start gap-16">
                        <p className="text-2xl font-semibold font-poppins text-white">01</p>
                        <div>
                            <h1 className="text-white text-2xl font-lora font-semibold mb-2" >Custom Web Applications</h1>
                            <p className="text-[#FFFFFFA6] text-base font-lora font-medium">Tailored, efficient, user-centric web solutions..</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 bg-[#131313] border border-[#353535] rounded-full icon-container">
                        <FiArrowUpRight className="text-white hover:text-[#131313] text-2xl icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
