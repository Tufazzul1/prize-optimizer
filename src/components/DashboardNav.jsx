
import { IoNotificationsOutline } from "react-icons/io5";

const DashboardNav = () => {
    return (
                <div className="flex items-center gap-4">
                    <IoNotificationsOutline className="text-2xl" />
                    <img src="/brand-logo.png" alt="" />
                    <p>Ahmed Saleh</p>
                </div>
    );
};

export default DashboardNav;