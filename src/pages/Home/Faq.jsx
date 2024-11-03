const Faq = () => {

    const faqs = [
        {
            question: "Q1: What is PriceOptimizer?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
        {
            question: "Q2: How does PriceOptimizer track competitor prices?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
        {
            question: "Q3: Can I use PriceOptimizer for different types of products?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
        {
            question: "Q4: Is PriceOptimizer suitable for small businesses?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
        {
            question: "Q5: How long does it take to see results?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
        {
            question: "Q6: Does PriceOptimizer support multiple currencies?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
        {
            question: "Q7: Can I try PriceOptimizer for free?",
            answer: "A: PriceOptimizer is a powerful tool designed to help e-commerce businesses optimize their product pricing by analyzing competitors' prices and market trends."
        },
    ];

    return (
        <div id="faq" className="sm:px-5 md:px-8 lg:px-16 relative py-16 bg-[#FEF4EA]">
            <img className="absolute right-0 bottom-0" src="/faqbg1.png" alt="faq-img" />
            <img className="absolute top-[35%] bottom-[65%]" src="/faqbg2.png" alt="faq-img" />
            <h2 className="text-4xl font-Cormorant text-center mb-5 font-semibold">Frequently Asked Questions</h2>
            <div className="max-w-[830px] mx-auto"> 
                {faqs.map((faq, index) => (
                    <div className="collapse collapse-plus" key={index}>
                        <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                        <div className="collapse-title text-xl font-medium">{faq.question}</div>
                        <div className="collapse-content max-w-[750px]">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
