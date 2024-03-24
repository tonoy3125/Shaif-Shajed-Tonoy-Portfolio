

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto mt-24 mb-20">
            <div className="flex items-start gap-20">
                <div>
                    <h5 className="text-base font-poppins font-medium text-[#b1b1b1]">Get In Touch</h5>
                    <h1 className="font-poppins text-[45px] font-medium"><span className="text-[#fff]">Let’s Talk For your</span> <br /><span className="text-[#c9f31d]">Next Projects</span></h1>
                    <p className="text-base text-[#b1b1b1] font-poppins w-[400px]">Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                </div>
                <div>
                    <div className="flex items-center gap-10 mb-14" >
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Full Name <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded-xl border  border-[#353535] focus:border-[#c9f31d] focus:outline-none" type="text" name="propertyname" placeholder="Enter Property Name Here" id="" />
                        </div>
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Email Address <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded border  border-[#353535] focus:border-[#c9f31d] focus:outline-none" type="text" name="propertyname" placeholder="Enter Property Name Here" id="" />
                        </div>
                    </div>
                    <div className="flex items-center gap-10" >
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Phone Number <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded-xl border  border-[#353535] focus:border-[#c9f31d] focus:outline-none" type="text" name="propertyname" placeholder="Enter Property Name Here" id="" />
                        </div>
                        <div className="">
                            <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Subject <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:pl-8 md:py-5 w-[380px] bg-[#292828]   text-base font-semibold font-lora text-white rounded border  border-[#353535] focus:border-[#c9f31d] focus:outline-none" type="text" name="propertyname" placeholder="Enter Property Name Here" id="" />
                        </div>
                    </div>
                    <div className="mb-10 mt-10">
                        <h2 className=" text-base md:text-lg font-semibold text-white mb-2 lg:mb-4 font-poppins">Textarea <span className="text-[#c9f31d]">*</span></h2>
                        <textarea id="message" rows="4" className="block pt-4 pb-4 pl-2 md:pl-8 md:py-5 w-full text-base font-semibold font-lora text-white bg-[#292828] rounded-lg   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border  border-[#353535] focus:border-[#c9f31d] focus:outline-none" placeholder="Write message"></textarea>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;