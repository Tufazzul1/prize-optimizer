import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

const Dashboard = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            <div className="w-[20%] bg-[#FEF4EA]">
                <Link to={'/dashboard'} className="flex justify-center mt-6 p-4">
                    <img src="/logo.png" alt="Logo" />
                </Link>

                <div className="m-4 flex gap-2 bg-white p-2 rounded-lg">
                    <img className="w-[48px]" src="/brand-logo.png" alt="Brand Logo" />
                    <div>
                        <p>Shopify</p>
                        <h5 className="text-sm">Believer’s Sign</h5>
                    </div>
                    <div className="relative inline-block">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none"
                        >
                            <svg className="w-5 h-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div
                                onClick={() => setIsOpen(false)}
                                className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
                            >
                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"> Profile</a>
                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100">Settings</a>
                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100">Sign Out</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between min-h-screen flex-col">
                    <div>
                        <ul className="md:mt-5 md:px-8">
                            {[
                                { path: "/dashboard", label: "Competitor Analysis" },
                                { path: "/dashboard/market-trends", label: "Market Trends" },
                                { path: "/dashboard/change-history", label: "Change History" },
                                { path: "/dashboard/store-setting", label: "Store Settings" },
                            ].map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={`btn w-full font-normal ${location.pathname === item.path ? "bg-[#FF5C35] text-white" : "hover:text-[#FF5C35] bg-transparent border-none shadow-none"}`}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-4 text-center rounded-lg m-4">
                        <h3 className="text-xl font-semibold">Full Access</h3>
                        <p className="mb-3">See All Products & 10 Competitor Insights</p>
                        <Button text="Get Full Access" />
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
