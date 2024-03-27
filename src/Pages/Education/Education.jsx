

const Education = () => {
    return (
        <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1  gap-5 md:px-14 px-4 lg:px-0 font-lora">
                <div className=" rounded text-center py-5 border border-[#353535] shadow-2xl  bg-[#292828]">
                    <h1 className="text-xl font-semibold text-white">Master of Social Sciences (MSS)</h1>
                    <h3 className="text-base font-medium text-white">Department Of Economics</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2021 </p>
                    <p className="text-base font-medium text-white">National University Of Bangladesh </p>
                </div>
                <div className="border border-[#353535] shadow-2xl  bg-[#292828] text-center rounded py-5">
                    <h1 className="text-xl font-semibold text-white">Bachelor of Social Sciences (BSS)</h1>
                    <h3 className="text-base font-medium text-white">Department Of Economics</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2020 </p>
                    <p className="text-base font-medium text-white">National University Of Bangladesh </p>
                </div>
                <div className="border border-[#353535] shadow-2xl  bg-[#292828] text-center rounded py-5">
                    <h1 className="text-xl font-semibold text-white">Higher Secondary School Certificate (HSC)</h1>
                    <h3 className="text-base font-medium text-white">Business Studies</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2014 </p>
                    <p className="text-base font-medium text-white">Govt City College </p>
                    <p className="text-base font-medium text-white">Board : Chattogram </p>
                </div>
                <div className="border border-[#353535] shadow-2xl  bg-[#292828] text-center rounded py-5">
                    <h1 className="text-xl font-semibold text-white">Secondary School Certificate (SSC)</h1>
                    <h3 className="text-base font-medium text-white">Business Studies</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2012 </p>
                    <p className="text-base font-medium text-white">Jorarganj Buddha High School</p>
                    <p className="text-base font-medium text-white">Board : Chattogram </p>
                </div>
            </div>
        </div>
    );
};

export default Education;