import React from 'react';

const LoginPage = () => {
    return (
        <div className='container w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center'>

            {/* Card */}

            <div className=" bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200 p-12 mb-10 mt-8">

                {/* Title */}

                <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Login to <span className="text-blue-700">Dragon News</span>
                </h2>

                <p className="text-center text-sm text-gray-500 mb-8 mt-3">
                    Welcome back! Please enter your details.
                </p>

                {/* Form */}

                <form className="space-y-4 border-t-2 border-gray-200 pt-8">

                    {/* Email */}

                    <div>
                        <label className="text-lg font-semibold text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                        />
                    </div>

                    {/* Password */}

                    <div>
                        <label className="text-lg font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                        />
                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        className="w-full mt-2 py-3 rounded-lg bg-[#403F3F] text-white font-bold hover:bg-blue-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}

                <p className="text-center text-sm text-gray-500 mt-6">
                    Dont’t Have An Account ?{" "}
                    <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;