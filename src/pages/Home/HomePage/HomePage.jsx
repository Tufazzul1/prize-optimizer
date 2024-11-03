import About from "../About";
import Banner from "../Banner";
import Brands from "../Brands";
import HowWork from "../HowWork";
import Result from "../Result";
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
        </div>
    );
};

export default HomePage;