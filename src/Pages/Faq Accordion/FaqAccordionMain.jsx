import { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import './FaqAccordion.css'

const FaqAccordionMain = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='max-w-7xl mx-auto'>
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
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>What sets you apart from other candidates?</span></div>
                            <div className="accordion-content">
                                <p>What sets me apart is my unique combination of technical expertise, creativity, and strong communication skills.I am always eager to learn and adapt to new challenges.</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>Can you provide examples of your previous work?</span></div>
                            <div className="accordion-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>How do you handle tight deadlines or high-pressure situations?</span></div>
                            <div className="accordion-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordionMain;
