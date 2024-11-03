import Button from "../../components/Button";


const Why = () => {

    const cardData = [
        {
            title: "Competitor Price Analysis",
            description: "Get real-time insights into competitor pricing to adjust your own."
        },
        {
            title: "Market Trends",
            description: "Track industry trends to stay ahead of the curve."
        },
        {
            title: "Data-Driven Decisions",
            description: "Make smarter pricing decisions backed by comprehensive data."
        },
        {
            title: "Easy Integration",
            description: "Connect with popular e-commerce platforms for seamless updates."
        },
    ]
    return (
        <div className="bg-[#FEF4EA]">
            <div className="py-16 max-w-[1240px] mx-auto relative sm:px-5 md:px-8 lg:px-16">
                <img className="absolute right-[35px] top-[50%] bottom-[50%] z-0" src="/who-bg.png" alt="" />
                <h2 className="text-4xl font-Cormorant text-center">Why Choose PriceOptimizer?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-5 my-10 relative z-10">
                    {
                        cardData.map((card) => (
                            <div key={card.title} className="bg-white p-3 rounded-lg ">
                                <h3 className="text-xl font-semibold mb-16">{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="text-center">
                    <Button text="Start for Free" />
                </div>

            </div>
        </div>
    );
};

export default Why;