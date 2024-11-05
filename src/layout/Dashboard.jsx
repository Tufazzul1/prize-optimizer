import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";


const Dashboard = () => {

    const location = useLocation();

    return (
        <div className="flex">
            <div className="w-[20%] min-h-screen bg-[#FEF4EA]">
                <Link to={'/dashboard/competitor'} className=" flex justify-center mt-6 p-4"><img src="/logo.png" alt="" /></Link>

                <div className="h-full flex justify-between flex-col">
                    <div>
                        <ul className="md:mt-5 md:px-8">
                            <li>
                                <NavLink
                                    className={location.pathname === "/dashboard" ? "btn bg-[#FF5C35] text-white font-normal w-full hover:bg-[#FF5C35]" : "btn hover: text-[#FF5C35] w-full bg-transparent border-none shadow-none"} to={'/dashboard'}>
                                    Competittor Analysis
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={location.pathname === "/dashboard/market-trends" ? "btn bg-[#FF5C35] text-white font-normal w-full hover:bg-[#FF5C35]" : "btn  hover:text-[#FF5C35] w-full bg-transparent border-none shadow-none font-normal"} to={'/dashboard/market-trends'}>
                                    Market Trends
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={location.pathname === "/dashboard/change-history" ? "btn bg-[#FF5C35] text-white font-normal w-full hover:bg-[#FF5C35]" : "btn  hover:text-[#FF5C35] w-full bg-transparent border-none shadow-none font-normal"} to={'/dashboard/change-history'}>
                                    Change History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={location.pathname === "/dashboard/store-setting" ? "btn bg-[#FF5C35] text-white font-normal w-full hover:bg-[#FF5C35]" : "btn  hover:text-[#FF5C35] w-full bg-transparent border-none shadow-none font-normal"} to={'/dashboard/store-setting'}>
                                    Store Settings
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    <div className="bg-white p-4 text-center rounded-lg m-4">
                        <h3 className="text-xl font-semibold">Full Access</h3>
                        <p className="mb-3">See All Products & 10 Competitor Insights</p>
                        <Button text="Get Full Access"></Button>
                    </div>
                </div>


            </div>
            <div className="flex-1">
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;