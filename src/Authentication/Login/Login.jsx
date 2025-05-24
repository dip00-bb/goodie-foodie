import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();



    const { googleLogIn, setUser, userLogIn } = use(AuthContext);

    const handleSignInWithGoogle = () => {
        googleLogIn()
            .then(result => {
                setUser(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                toast.success("Login Successful")

            })
            .catch(error => toast.warn(error.message))
    }

    const handleUserLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogIn(email, password)
            .then(result => {
                setUser(result.user);
                toast.success("Log in successful");
                navigate(`${location.state ? location.state : '/'}`)
            }).catch(error => toast.error(error.message))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Login</h2>

                <form onSubmit={handleUserLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-black">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                    </div>

                    <div className="flex justify-between text-sm">
                        <p className="text-green-600 hover:underline">Forgot Password?</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="my-6 text-center">
                    <p className="text-gray-600 text-sm">Don't have an account? <a href="/register" className="hover:underline text-green-500">Register</a></p>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                </div>

                <button onClick={handleSignInWithGoogle}
                    className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    <span className='text-black cursor-pointer'>Login with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
