import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    const { createUser, sendVerificationEmail, verifyEmail } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        if (password.length < 6) {
            alert("Password should be at least 6 characters.");
            return;
        }

        const user = await createUser(email, password);
        if (user) {
            sendVerificationEmail(user);
            setIsOtpSent(true);
        }
    };

    const handleVerifyOtp = async () => {
        const isVerified = await verifyEmail();
        if (isVerified) {
            setOtpVerified(true);
            navigate('/dashboard');
        } else {
            alert("Please verify your email using the OTP sent to your email address.");
        }
    };

    return (
        <div>
            <div className="flex justify-center mt-10">
                <Link to={'/'}><img src="/public/logo.png" alt="Logo-img" /></Link>
            </div>
            <div className="hero min-h-screen w-full p-10">
                <div className="max-w-md lg:w-1/2">
                    <h3 className="text-4xl font-bold mt-7 text-center font-Cormorant">Join PriceOptimizer</h3>

                    {isOtpSent && !otpVerified ? (
                        <div className="card-body">
                            <button onClick={handleVerifyOtp} className="btn hover:bg-[#fc643e] bg-[#FF5C35] text-white font-normal">Verify Email</button>
                        </div>
                    ) : (
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[16px] right-4">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-[#fc643e] bg-[#FF5C35] text-white font-normal">Sign Up</button>
                            </div>
                        </form>
                    )}
                    <p className="text-center mb-4 mt-4">Already have an account? <Link to={'/login'} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
