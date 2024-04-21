import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className='text-center pt-32 pb-64 '>
            <Player
                autoplay
                loop
                src="https://lottie.host/41948132-bef1-478e-87d8-86bcefe326ae/LWvxzRMADK.json"
                className='md:w-[700px] '
            >
            </Player>
            <h2 className='md:text-5xl text-white font-bold'>
                NOT FOUND
            </h2>
            <Link to="/"><button className="btn btn-accent text-white mt-7">Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;