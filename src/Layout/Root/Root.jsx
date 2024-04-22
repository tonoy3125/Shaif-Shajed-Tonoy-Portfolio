import { Outlet } from "react-router-dom";

const Root = () => {

    return (
        <div className="container mx-auto lg:max-w-full ">
            <Outlet />
        </div>
    );
};

export default Root;