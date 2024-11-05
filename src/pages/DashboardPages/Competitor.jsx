import DashboardNav from "../../components/DashboardNav";
import DashboardNavTitle from "../../components/DashboardNavTitle";


const Competitor = () => {
    return (
        <div>
            <div className="flex justify-between p-5 border-b-2">
                <DashboardNavTitle title="Competitor Price Analysis"></DashboardNavTitle>
                <DashboardNav></DashboardNav>
            </div>
            <h2 className="text-3xl">Hello from Competitor page</h2>
        </div>
    );
};

export default Competitor;