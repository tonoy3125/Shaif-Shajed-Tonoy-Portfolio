import './Skill.css'

const Skill = () => {
    return (
        <div className="pb-10">
            <div>
                <h5 className="text-base font-medium text-white/50 text-center">My Skills</h5>
                <h1 className="text-5xl font-medium text-center"><span className="text-[#fff]">Let’s Explore</span> <span className="text-[#c9f31d]">Popular Skills</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 max-w-7xl mx-auto mt-20">
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/R3QRS0M/icons8-html-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">HTML</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/YLFkjzS/icons8-css-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">CSS</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/9bm0dT6/icons8-tailwind-css-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Tailwind CSS</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/ypjhk9N/icons8-javascript-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Javascript</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/ygG9LXX/favicon-192.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Daisy Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/nwL20f0/icons8-bootstrap-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Bootstrap</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/JrMq5q3/icons8-react-js-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">React</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;