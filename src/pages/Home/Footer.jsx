import Button from "../../components/Button";


const Footer = () => {
    return (
        <div className="relative sm:px-5 md:px-8 lg:px-16">
            <img className="absolute left-[-50px] top-[50px]" src="/bannerbg-1.png" alt="" />
            <footer className="footer bg-[#FEF4EA] p-10">
                <nav>
                    <img src="/public/logo.png" alt="" />

                    <p className="mt-6">PriceOptimizer © 2024. All Rights Reserved.</p>
                    
                </nav>
                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Price</a>
                </nav>
                <nav>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms of Services</a>
                </nav>
                <form className="relative">
                    <img className="bottom-[-40px] absolute left-[-40px]" src="/bannerbg-2.png" alt="" />
                    <fieldset className="form-control w-80">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="input input-bordered join-item" />
                            <Button text="Start for Free" className="btn"></Button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;