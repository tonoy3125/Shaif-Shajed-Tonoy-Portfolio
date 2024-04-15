import { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import './FaqAccordion.css'

const FaqAccordionMain = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='max-w-7xl mx-auto pt-10 pb-10'>
            <div className='flex items-center gap-16'>
                <div className='flex-1'>
                    <img className='rounded-2xl' src="https://i.ibb.co/Hg8p73y/Blue-Dots-Birthday-Photo-Collage-2.png" alt="" />
                </div>
                <div className='flex-1 font-lora'>
                    <div className="accordion">
                        <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>What is your professional background and experience?</span></div>
                            <div className="accordion-content">
                                <p className=''>I have a Master's degree in Department Of Economics from National University Of Bangladesh, and 2 years of learning experience in web developement field.Throughout my career, I've actively contributed to a variety of web development projects, refining my skills in HTML, CSS, JavaScript, and other relevant technologies. My experience includes designing responsive and visually appealing websites, optimizing performance, and ensuring cross-browser compatibility</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 2 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>What sets you apart from other candidates?</span></div>
                            <div className="accordion-content">
                                <p>What sets me apart is my unique combination of technical expertise, creativity, and strong communication skills.I am always eager to learn and adapt to new challenges.</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 3 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>How do you approach problem-solving in your projects?</span></div>
                            <div className="accordion-content">
                                <p>My approach to problem-solving begins with thoroughly understanding the issue at hand and breaking it down into manageable parts. I research potential solutions, consult relevant documentation and resources, and collaborate with team members if necessary. I believe in iterative development, testing solutions, and refining until the desired outcome is achieved.</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 4 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>How do you handle tight deadlines or high-pressure situations?</span></div>
                            <div className="accordion-content">
                                <p>I thrive in fast-paced environments and have a proven track record of meeting tight deadlines while maintaining the quality of my work. I stay organized, prioritize tasks effectively, and remain calm under pressure. Additionally, I am proactive in communicating with team members and stakeholders to ensure everyone is on the same page and deadlines are met successfully</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordionMain;
