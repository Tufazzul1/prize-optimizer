import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {


    const { signIn, signInWithGoogle } = useAuth()
    const [showPassword, setShowPassword] = useState(false);
    // console.log( "location from login",location)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate 
                navigate('/dashboard');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSocialLogin = socialProvider => {

        socialProvider()
            .then(result => {
                console.log(result.user);
                    // navigate 
                    navigate('/dashboard');
            })
            .catch(error => {
                console.log(error)
            }
            )
    }
    return (
        <div>
            <div className="flex justify-center mt-10">
                <Link to={'/'}><img src="/public/logo.png" alt="Logo-img" /></Link>
            </div>
            <div className="hero min-h-screen w-full" >
                <div className="max-w-md  lg:w-1/2">
                    <h3 className="text-4xl font-bold mt-7 text-center font-Cormorant">Welcome Back</h3>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[16px] right-4 ">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>

                            <p className="text-center text-[#FF5C35] mt-4">Forgot password</p>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#fc643e] bg-[#FF5C35] text-white font-normal">Login</button>
                            <p className="text-center my-5">Or</p>
                            <button onClick={() => handleSocialLogin(signInWithGoogle)} className="btn hover:bg-[#213343] bg-[#213343] text-white font-normal">Sign in with Google</button>
                        </div>
                    </form>


                    <p className="text-center mb-4 mt-4">Don't have an account? <Link to={'/signup'} className="underline">Sign Up</Link></p>

                </div>
            </div>
        </div>
    );
};




export default Login;
