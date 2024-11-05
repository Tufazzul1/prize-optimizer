import DashboardNav from "../../components/DashboardNav";
import DashboardNavTitle from "../../components/DashboardNavTitle";

const Trends = () => {
    return (
        <div>
            <div className="flex justify-between p-5 border-b-2">
                <DashboardNavTitle title="Trends Overview"></DashboardNavTitle>
                <DashboardNav></DashboardNav>
            </div>
            <h2 className="text-2xl">Hello From Trends Page</h2>
        </div>
    );
};

export default Trends;