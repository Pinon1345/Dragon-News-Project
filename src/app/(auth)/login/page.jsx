"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const handleLoginFunc = async (data) => {
        console.log("Form Data", data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error);

        if (error) {
            alert(error.message)
        }

        if (res) {
            alert("Login Successful")
        }
    }

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className='container w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center'>

            {/* Card */}

            <div className=" bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200 p-12 mb-10 mt-8">

                {/* Title */}

                <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Login to <span className="text-blue-700">Dragon News</span>
                </h2>

                <p className="text-center text-sm text-gray-500 mb-8 mt-3">
                    Welcome! Please enter your details.
                </p>

                {/* Form */}

                <form
                    onSubmit={handleSubmit(handleLoginFunc)}
                    className="space-y-4 border-t-2 border-gray-200 pt-8">

                    {/* Email */}

                    <div>
                        <label className="text-lg font-semibold text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='mt-2 text-xs font-medium tracking-wide text-red-500'>{errors.email.message}</p>}
                    </div>

                    {/* Password */}

                    <div className='relative'>
                        <label className="text-lg font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                            {...register("password", { required: "Password field is required" })}
                        />
                        <span className='absolute cursor-pointer right-3 top-13' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <IoIosEye className='w-5 h-5'></IoIosEye> : <IoIosEyeOff className='w-5 h-5'></IoIosEyeOff>}
                        </span>
                        {errors.password && <p className='mt-2 text-xs font-medium tracking-wide text-red-500'>{errors.password.message}</p>}
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
                    Don’t Have An Account ?{" "}
                    <Link href={"/register"}>
                        <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                            Register
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;