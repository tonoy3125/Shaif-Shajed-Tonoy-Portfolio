import { FaUserGraduate } from "react-icons/fa6";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { SlBadge } from "react-icons/sl";


const EducationExperience = () => {

    return (
        <div className=" max-w-6xl mx-auto pt-10 md:pb-10">

            <div className="flex lg:flex-row flex-col justify-between lg:gap-6">
                <div>
                    <div className="flex items-center gap-5 mb-10 text-[#fff] font-poppins justify-center lg:justify-start">
                        <FaUserGraduate className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">My Education</h1>
                    </div>
                    <Education></Education>
                </div>
                <div className=" hidden lg:flex mt-20">
                    <ul className="steps steps-vertical h-[700px]">
                        <li className="step"></li>
                        <li className="step"></li>
                        <li className="step"></li>
                        <li className="step"></li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-5 mb-10 text-[#fff] font-poppins justify-center lg:justify-start">
                        <SlBadge className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">My Experience</h1>
                    </div>
                    <Experience></Experience>
                </div>

            </div>
        </div>
    );
};

export default EducationExperience;