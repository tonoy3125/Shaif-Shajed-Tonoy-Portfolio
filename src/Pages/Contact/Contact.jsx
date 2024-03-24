

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-20">
                <div>
                    <h5 className="text-base font-poppins font-medium text-[#b1b1b1]">Get In Touch</h5>
                    <h1 className="font-poppins text-[45px] font-medium"><span className="text-[#fff]">Let’s Talk For your</span> <br /><span className="text-[#c9f31d]">Next Projects</span></h1>
                    <p className="text-base text-[#b1b1b1] font-poppins w-[400px]">Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                </div>
                <div>
                    <div className="flex items-center gap-10" >
                        <div className="">
                            <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Full Name <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:p-4 w-[380px] bg-[#292828]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="propertyname" placeholder="Enter Property Name Here" id="" />
                        </div>
                        <div className="">
                            <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Email Address <span className="text-[#c9f31d]">*</span></h2>
                            <input className="pt-4 pb-4 pl-2 md:p-4 w-[380px] bg-[#292828]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="propertyname" placeholder="Enter Property Name Here" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;