import Button from "../../components/Button";


const Result = () => {
    return (
        <div className="bg-[#192733] text-white py-16 sm:px-5 md:px-8 lg:px-16 relative">
            
            <img className="absolute bottom-0 left-0" src="/resultbg-1.png" alt="" />
            <img className="absolute right-0 top-0" src="/resultbg-2.png" alt="" />

            <h2 className="text-4xl font-Cormorant text-center mb-8">Customer Results After 1 Year</h2>
            <div className="flex flex-col md:flex-row gap-5 p-4">
                <div className="p-4 pr-6 bg-[#213343] rounded-md flex-1">
                    <h4 className="text-2xl">Increased Sales:</h4>
                    <h2 className="text-4xl font-Cormorant my-3">+35%</h2>
                    <p className="font-light">Boost in overall sales with optimized pricing strategies.</p>
                </div>
                <div className="p-4 pr-6 bg-[#213343] rounded-md flex-1">
                    <h4 className="text-2xl">Higher Profit Margins:</h4>
                    <h2 className="text-4xl font-Cormorant my-3">+25%</h2>
                    <p className="font-light">Improved profit margins by smartly adjusting product prices.</p>
                </div>
                <div className="p-4 pr-6 bg-[#213343] rounded-md flex-1">
                    <h4 className="text-2xl">Reduced Manual Work:</h4>
                    <h2 className="text-4xl font-Cormorant my-3">-50%</h2>
                    <p className="font-light">Saved time by automating competitor price tracking and adjustments.</p>
                </div>
            </div>
            <div className="text-center mt-10">
                <Button text="Start for Free"></Button>
            </div>
        </div>
    );
};

export default Result;