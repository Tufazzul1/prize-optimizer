import { IoPlayCircleOutline } from "react-icons/io5";
import Button from "../../components/Button";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row py-8 md:py-16 bg-[#FEF4EA] sm:px-5 md:px-8 lg:px-16">
            <div className="flex-1">
                <p className="font-inter">Best Price Solution for E-Commerce</p>
                <h2 className="sm:text-xl md:text-2xl lg:text-4xl font-Cormorant font-bold">
                    Maximize Your Profits with <br /> the Best Price Optimizer <br /> for E-Commerce
                </h2>
                <p className="mt-6">
                    Use Price Optimizer to track competitor prices and stay ahead.
                </p>

                <div className="space-x-4 flex py-4 md:py-10">
                    <Button text={"Start for Free"}></Button>
                    <button className="flex items-center text-[#FF5C35] gap-2">
                        <IoPlayCircleOutline /> Watch Video
                    </button>
                </div>
            </div>
            <div className="flex-1 relative">

                <img className="absolute top-[-50px] right-[-60px] z-0" src="/bannerbg-1.png" alt="" />
                <img className="absolute left-[-40px] bottom-[-40px] z-0" src="/bannerbg-2.png" alt="" />

                <iframe
                    className="z-10 relative rounded-md"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&mute=1"
                    title="Smart City Digital City Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    );
};

export default Banner;
