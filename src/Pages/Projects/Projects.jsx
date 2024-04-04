import ProjectFourCard from '../../Components/Project Four/Project Four Card/ProjectFourCard';
import ProjectOneCard from '../../Components/Project One/Project One Card/ProjectOneCard';
import ProjectThreeCard from '../../Components/Project Three/Project Three Card/ProjectThreeCard';
import ProjectTwoCard from '../../Components/Project Two/Project Two Card/ProjectTwoCard';
import './Projects.css'


const Projects = () => {

    return (
        <div className="pt-10 pb-10">
            <div className="max-w-6xl mx-auto">
                <h5 className="text-base font-medium text-white/50 text-center mb-5 font-poppins">Latest Works</h5>
                <h1 className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium text-center font-poppins"><span className="text-[#fff] mb-10">Explore My Popular</span> <span className="text-[#c9f31d]">Projects</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 xs:mx-4 md:mx-4">
                    <ProjectOneCard />
                    <ProjectTwoCard />
                    <ProjectThreeCard />
                    <ProjectFourCard />
                </div>
            </div>

        </div>
    );
};

export default Projects;