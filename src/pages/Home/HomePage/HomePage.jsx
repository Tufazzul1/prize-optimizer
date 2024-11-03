import About from "../About";
import Banner from "../Banner";
import Brands from "../Brands";
import Faq from "../Faq";
import HowWork from "../HowWork";
import Result from "../Result";
import Review from "../Review";
import Why from "../Why";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Why></Why>
            <HowWork></HowWork>
            <About></About>
            <Result></Result>
            <Faq></Faq>
            <Review></Review>
        </div>
    );
};

export default HomePage;