import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import EducationExperience from "../Education And Experience/EducationExperience";
import Projects from "../Projects/Projects";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <EducationExperience />
            <Skill />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;