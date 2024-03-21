import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="container mx-auto lg:max-w-full lg:px-20">
            <Outlet />
        </div>
    );
};

export default Root;