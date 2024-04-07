import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";


const AboutMe = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <div className="flex ">
                    <div>
                        <h5 className="text-base font-medium text-white/50  mb-5 font-poppins">My Skills</h5>
                        <h1 className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium   font-poppins"><span className="text-[#fff]">Professional</span> <span className="text-[#c9f31d]">Problem Solutions</span> <span className="text-[#fff]">For Digital Products</span></h1>
                        <p className="text-base text-[#b1b1b1] font-poppins">At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum</p>
                    </div>
                    <div>
                        <img className="max-w-xl" src="https://i.ibb.co/kHpnxzL/Gray-and-Orange-Simple-Linked-In-Profile-Picture.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;