import { BiSolidQuoteAltLeft } from "react-icons/bi";


const Review = () => {

    const reviews = [

        {
            id : 1,
            comment : "PriceOptimizer has completely transformed our pricing strategy. We've seen a 20% increase in sales since we started using it!",
            name : "— Sarah L., E-Commerce Store Owner"
        },
        {
            id : 2,
            comment : "As a small business owner, PriceOptimizer has been a game-changer. It helped me stay competitive by adjusting prices in real-time.",
            name : "— John M., Head of E-Commerce Operations"
        },
        {
            id : 3,
            comment : "With PriceOptimizer, I can monitor competitor prices effortlessly and make informed decisions. It’s saved me countless hours!",
            name : "— Emily R., Affiliate Marketer"
        },
        {
            id :4,
            comment : "This tool helped us optimize our pricing in a way that feels right for both our customers and our margins. It’s a must-have for any online store.",
            name : "— Mark T., Product Manager"
        },
        {
            id : 5,
            comment : "The real-time competitor analysis is fantastic. PriceOptimizer made it easier to stay competitive and boost revenue without extra effort.!",
            name : "— Laura G., E-Commerce Manager"
        },
        {
            id : 6,
            comment : "PriceOptimizer’s insights have been invaluable. Our team now adjusts prices confidently and stays ahead of the market.",
            name : "— Daniel K., Marketing Director"
        },
    ]
    return (
        <div className="bg-white sm:px-5 md:px-8 lg:px-16 py-16">
            <h2 className="text-4xl font-Cormorant text-center">See What Our Users are Saying</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                    reviews.map((review) => (
                        <div key={review.id} className="p-4 bg-[#FEF4EA] rounded-lg ">
                            <BiSolidQuoteAltLeft className="text-5xl" />
                            <p className="my-3">{review.comment}</p>
                            <p>{review.name}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Review;