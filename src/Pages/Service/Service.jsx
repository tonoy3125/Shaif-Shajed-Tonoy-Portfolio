import { FiArrowUpRight } from "react-icons/fi";
import './Service.css'

const Service = () => {
    return (
        <div className="max-w-7xl mx-auto pb-10 pt-10">
            <h5 className="text-base font-medium text-white/50 text-center mb-5 font-poppins">Popular Services</h5>
            <h1 className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium text-center px-2 font-poppins mb-10"><span className="text-[#fff]">My</span> <span className="text-[#c9f31d]">Special Service</span></h1>
            <div className="flex flex-col lg:flex-row items-center gap-5 mb-5 ">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[135px] lg:gap-28 xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-[700px] lg:w-[630px] px-5 py-10 service-card">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-16">
                        <p className="text-2xl font-semibold font-poppins text-white">01</p>
                        <div>
                            <h1 className="text-white text-xl sm:text-2xl font-lora font-semibold mb-2" >Custom Web Applications</h1>
                            <p className="text-[#FFFFFFA6] xs:text-xs sm:text-sm semi-sm:text-base font-lora font-medium" style={{ whiteSpace: "nowrap" }}>Tailored, efficient, user-centric web solutions..</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 bg-[#131313] border border-[#353535] rounded-full icon-container">
                        <FiArrowUpRight className="text-white hover:text-[#131313] text-2xl icon" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-32 lg:gap-28 xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-[700px] lg:w-[630px] px-5 py-10 service-card">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-16">
                        <p className="text-2xl font-semibold font-poppins text-white">02</p>
                        <div>
                            <h1 className="text-white text-xl sm:text-2xl font-lora font-semibold mb-2" >Responsive Web Design</h1>
                            <p className="text-[#FFFFFFA6] xs:text-xs sm:text-sm semi-sm:text-base font-lora font-medium" style={{ whiteSpace: "nowrap" }}>Adaptive user friendly and device web layouts..</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 bg-[#131313] border border-[#353535] rounded-full icon-container">
                        <FiArrowUpRight className="text-white hover:text-[#131313] text-2xl icon" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row  items-center gap-5 mb-5">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[135px] lg:gap-28 xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-[700px] lg:w-[630px] px-5 py-10 service-card">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-16">
                        <p className="text-2xl font-semibold font-poppins text-white">03</p>
                        <div>
                            <h1 className="text-white text-xl sm:text-2xl font-lora font-semibold mb-2" >API Dev & Integration</h1>
                            <p className="text-[#FFFFFFA6] xs:text-xs sm:text-sm semi-sm:text-base font-lora font-medium" style={{ whiteSpace: "nowrap" }}>Efficient, compatible and smooth data sharing</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 bg-[#131313] border border-[#353535] rounded-full icon-container">
                        <FiArrowUpRight className="text-white hover:text-[#131313] text-2xl icon" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[130px] lg:gap-28 xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-[700px] lg:w-[630px] px-5 py-10 service-card">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-16">
                        <p className="text-xl sm:text-2xl font-semibold font-poppins text-white">04</p>
                        <div>
                            <h1 className="text-white text-2xl font-lora font-semibold mb-2" >Progressive Web Apps</h1>
                            <p className="text-[#FFFFFFA6] xs:text-xs sm:text-sm semi-sm:text-base font-lora font-medium" style={{ whiteSpace: "nowrap" }}>Offline-enabled responsive native experiences</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 bg-[#131313] border border-[#353535] rounded-full icon-container">
                        <FiArrowUpRight className="text-white hover:text-[#131313] text-2xl icon" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row  items-center gap-5">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[130px] lg:gap-28 xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-[700px] lg:w-[630px] px-5 py-10 service-card">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-16">
                        <p className="text-xl sm:text-2xl font-semibold font-poppins text-white">05</p>
                        <div>
                            <h1 className="text-white text-2xl font-lora font-semibold mb-2" >Real-time Web Application</h1>
                            <p className="text-[#FFFFFFA6] xs:text-xs sm:text-sm semi-sm:text-base font-lora font-medium" style={{ whiteSpace: "nowrap" }}>Instant, interactive & user free experiences.....</p>
                        </div>
                    </div>
                    <div className="px-2 py-2 bg-[#131313] border border-[#353535] rounded-full icon-container">
                        <FiArrowUpRight className="text-white hover:text-[#131313] text-2xl icon" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[130px] lg:gap-28 xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-[700px] lg:w-[630px] px-5 py-10 service-card">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-16">
                        <p className="text-xl sm:text-2xl font-semibold font-poppins text-white">06</p>
                        <div>
                            <h1 className="text-white text-2xl font-lora font-semibold mb-2" >Single Page Applications</h1>
                            <p className="text-[#FFFFFFA6] xs:text-xs sm:text-sm semi-sm:text-base font-lora font-medium" style={{ whiteSpace: "nowrap" }}>Flexible, intuitive, customizable data platform.</p>
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
