import { FaUserGraduate } from "react-icons/fa6";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { SlBadge } from "react-icons/sl";


const EducationExperience = () => {

    return (
        <div className=" max-w-6xl mx-auto">


            <div className="flex lg:flex-row flex-col justify-between gap-6">
                <div>
                    <div className="flex items-center gap-5 mb-10 text-white">
                        <SlBadge className="text-5xl" />
                        <h1 className="text-5xl font-bold">My Experience</h1>
                    </div>
                    <Education></Education>
                </div>

                

            </div>
        </div>
    );
};

export default EducationExperience;