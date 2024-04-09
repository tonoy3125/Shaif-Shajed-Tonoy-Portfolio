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
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>Click to open this one and close others</span></div>
                            <div className="accordion-content">
                                <p className='text-white'>hello</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>Click to open this one and close others</span></div>
                            <div className="accordion-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                            <div className="accordion-title "><span className='accordian-inner'>{activeIndex === 1 ? <MdKeyboardArrowDown className='text-black text-xl' /> : <MdOutlineKeyboardArrowRight className='text-black text-xl' />}</span> <span>Click to open this one and close others</span></div>
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
