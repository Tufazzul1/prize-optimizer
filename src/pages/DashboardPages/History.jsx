import DashboardNav from "../../components/DashboardNav";
import DashboardNavTitle from "../../components/DashboardNavTitle";


const History = () => {
    return (
        <div>
            <div className="flex justify-between p-5 border-b-2">
                <DashboardNavTitle title="Your Pricing Change History"></DashboardNavTitle>
                <DashboardNav></DashboardNav>
            </div>
            <div></div>
        </div>
    );
};

export default History;