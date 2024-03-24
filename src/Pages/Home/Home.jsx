import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Skill />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;