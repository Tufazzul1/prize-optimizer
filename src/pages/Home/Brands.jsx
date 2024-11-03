import Marquee from "react-fast-marquee";


const Brands = () => {
    return (
        <div className="my-10">
            <p className="text-center mb-5 md:mb-10">2000+ eCommerce Brands Use to PriceOptimizer </p>

            <Marquee  speed={30}>
                <img className="ml-10" src="/brand1.png" alt="" />
                <img className="ml-10" src="/brand2.png" alt="" />
                <img className="ml-10" src="/brand3.png" alt="" />
                <img className="ml-10" src="/brand1.png" alt="" />
                <img className="ml-10" src="/brand2.png" alt="" />
                <img className="ml-10" src="/brand3.png" alt="" />
                <img className="ml-10" src="/brand1.png" alt="" />
                <img className="ml-10" src="/brand2.png" alt="" />
                <img className="ml-10" src="/brand3.png" alt="" />
            </Marquee>
            <Marquee className="mt-5 md:mt-10" direction="right" speed={30}>
                <img className="ml-10" src="/brand3.png" alt="" />
                <img className="ml-10" src="/brand1.png" alt="" />
                <img className="ml-10" src="/brand2.png" alt="" />
                <img className="ml-10" src="/brand3.png" alt="" />
                <img className="ml-10" src="/brand1.png" alt="" />
                <img className="ml-10" src="/brand2.png" alt="" />
                <img className="ml-10" src="/brand3.png" alt="" />
                <img className="ml-10" src="/brand1.png" alt="" />
                <img className="ml-10" src="/brand2.png" alt="" />
            </Marquee>
        </div>
    );
};

export default Brands;