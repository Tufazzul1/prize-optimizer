import DashboardNavTitle from "./DashboardNavTitle";
import { IoNotificationsOutline } from "react-icons/io5";

const DashboardNav = () => {
    return (
        <div className="flex justify-between p-5 border-b-2">
            <div>
                <DashboardNavTitle title="Competitor Price Analysis"></DashboardNavTitle>
            </div>
            <div className="flex items-center gap-4"> 
                <IoNotificationsOutline className="text-2xl" />
                <img src="/brand-logo.png" alt="" />
                <p>Ahmed Saleh</p>

            </div>
            
        </div>
    );
};

export default DashboardNav;