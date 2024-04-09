import AboutMe from "../../Components/About Me/AboutMe";
import FaqAccordionMain from "../Faq Accordion/FaqAccordionMain";
import Service from "../Service/Service";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const About = () => {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <Service />
            <FaqAccordionMain />
            <Footer />
        </div>
    );
};

export default About;