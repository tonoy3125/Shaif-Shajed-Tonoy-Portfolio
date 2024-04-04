import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import EducationExperience from "../Education And Experience/EducationExperience";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Skill from "../Skill/Skill";
import './Home.css'


const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Banner />
            <EducationExperience />
            <Skill />
            <Service />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;