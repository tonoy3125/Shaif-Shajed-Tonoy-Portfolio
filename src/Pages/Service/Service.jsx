import { FiArrowUpRight } from "react-icons/fi";

const Service = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center">
                <div className="flex items-center gap-28 border rounded-[15px] px-10 py-10">
                    <div className="flex items-start gap-16">
                        <p className="text-2xl font-semibold font-poppins text-white">01</p>
                        <div>
                            <h1 className="text-white text-2xl font-lora font-semibold mb-2" >Custom Web Applications</h1>
                            <p className="text-[#FFFFFFA6] text-base font-lora font-medium">Tailored, efficient, user-centric web solutions..</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 border rounded-full">
                        <FiArrowUpRight className="text-white text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;