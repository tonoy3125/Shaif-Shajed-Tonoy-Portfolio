import { IoCheckmarkSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n31ku5p', 'template_uhlmuey', form.current, 'bK8RydNwVnirPGhf4')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="max-w-7xl mx-auto mt-24 mb-20">
            <div className="flex items-start flex-col lg:flex-row gap-20 xs:ml-4 sm:ml-5 semi-sm:ml-5 lg:ml-0">
                <div>
                    <h5 className="text-base font-poppins font-medium text-[#b1b1b1] mb-5">Get In Touch</h5>
                    <h1 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-medium mb-12 leading-5"><span className="text-[#fff]">Let’s Talk For your</span> <br className="lg:block md:hidden" /><span className="text-[#c9f31d]">Next Projects</span></h1>
                    <p className="text-base text-[#b1b1b1] font-poppins lg:w-[400px] sm:mr-1 semi-sm:mr-0">Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                    <div className="flex items-center gap-5 mt-10 mb-7">
                        <div className="border px-1 py-1 rounded-full bg-[#c9f31d]">
                            <IoCheckmarkSharp className="text-xl" />
                        </div>
                        <p className="text-[#b1b1b1] text-xl font-medium">5+ Years Of Experience</p>
                    </div>
                    <div className="flex items-center gap-5 mb-7">
                        <div className="border px-1 py-1 rounded-full bg-[#c9f31d]">
                            <IoCheckmarkSharp className="text-xl" />
                        </div>
                        <p className="text-[#b1b1b1] text-xl font-medium">Professional Web Designer</p>
                    </div>
                    <div className="flex items-center gap-5 mb-7">
                        <div className="border px-1 py-1 rounded-full bg-[#c9f31d]">
                            <IoCheckmarkSharp className="text-xl" />
                        </div>
                        <p className="text-[#b1b1b1] text-xl font-medium">Mobile Apps Design</p>
                    </div>
                    <div className="flex items-center gap-5 mb-7">
                        <div className="border px-1 py-1 rounded-full bg-[#c9f31d]">
                            <IoCheckmarkSharp className="text-xl" />
                        </div>
                        <p className="text-[#b1b1b1] text-xl font-medium">Custom Design Support</p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex items-center  flex-col md:flex-row gap-5 lg:gap-10 mb-5 md:mb-14" >
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Full Name <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 xs:w-[280px] sm:w-[340px]  semi-sm:w-[380px] md:w-[350px] lg:w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded-xl border  border-[#353535] focus:border-[#c9f31d] focus:outline-none placeholder-[#FFFFFF33]" type="text" name="from_name" placeholder="Shaif Shajed Tonoy" id="" />
                        </div>
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Email Address <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 xs:w-[280px] sm:w-[340px] semi-sm:w-[380px] md:w-[350px] lg:w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded-xl border  border-[#353535] focus:border-[#c9f31d] focus:outline-none placeholder-[#FFFFFF33]" type="text" name="from_email" placeholder="support@gmail.com" id="" />
                        </div>
                    </div>
                    <div className="flex items-center  flex-col md:flex-row gap-5 lg:gap-10" >
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Phone Number <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 xs:w-[280px] sm:w-[340px] semi-sm:w-[380px] md:w-[350px] lg:w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded-xl border  border-[#353535] focus:border-[#c9f31d] focus:outline-none placeholder-[#FFFFFF33]" type="text" name="from_phone" placeholder="+8801824565456" id="" />
                        </div>
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Subject <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 xs:w-[280px] sm:w-[340px] semi-sm:w-[380px] md:w-[350px] lg:w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded-xl border  border-[#353535] focus:border-[#c9f31d] focus:outline-none placeholder-[#FFFFFF33]" type="text" name="form_subject" placeholder="i would like to discussed" id="" />
                        </div>
                    </div>
                    <div className="mb-10 mt-5 md:mt-10 ">
                        <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Textarea <span className="text-[#c9f31d]">*</span></h2>
                        <textarea id="message" rows="4" className="block pt-4 pb-4 pl-2 md:pl-8 md:py-5 w-full text-base font-semibold font-lora text-white bg-[#292828] rounded-xl   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border  border-[#353535] focus:border-[#c9f31d] focus:outline-none placeholder-[#FFFFFF33]" name="message" placeholder="Write message"></textarea>
                    </div>
                    <button type="submit" className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Send Us Message</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                </form>
            </div>
        </div>
    );
};

export default Contact;