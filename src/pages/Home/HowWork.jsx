
const HowWork = () => {
    return (
        <div className="py-16 bg-[#B7ECEC] relative sm:px-5 md:px-8 lg:px-16">
            <img className="top-16 left-24 absolute" src="/WorkBg.png" alt="" />
            <div className="text-center">
                <h2 className="text-4xl font-Cormorant">How It Works</h2>
                <p>PriceOptimizer simplifies the pricing process in 3 easy steps:</p>
            </div>
            <div className="flex space-x-16 mt-10 justify-center flex-col md:flex-row">
                <div>
                    <img src="/Work1.png" alt="work-img" />
                    <p className="text-center text-xl font-semibold mt-4">Connect Your Store</p>
                </div>
                <div>
                    <img src="/Work2.png" alt="work-img" />
                    <p className="text-center text-xl font-semibold mt-4">Analyze Competitors <br /> and Trends</p>
                </div>
                <div>
                    <img src="/Work3.png" alt="work-img" />
                    <p className="text-center text-xl font-semibold mt-4">Adjust Your Prices for <br />Maximum Profit</p>
                </div>
            </div>
        </div>
    );
};

export default HowWork;