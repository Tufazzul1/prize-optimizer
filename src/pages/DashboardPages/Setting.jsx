import DashboardNav from "../../components/DashboardNav";
import DashboardNavTitle from "../../components/DashboardNavTitle";


const Setting = () => {
    return (
        <div>
            <div className="flex justify-between p-5 border-b-2">
                <DashboardNavTitle title="Manage Your Store Settings"></DashboardNavTitle>
                <DashboardNav></DashboardNav>
            </div>
            <h2 className="text-2xl">Hello From setting page</h2>
        </div>
    );
};

export default Setting;