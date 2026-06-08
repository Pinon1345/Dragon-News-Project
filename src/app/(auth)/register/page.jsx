"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const handleRegisterFunc = async (data) => {
        console.log("Form Data", data);
        const { name, photo, email, password } = data
        console.log(name, photo, email, password);


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })

        console.log(res, error);

        if (error) {
            alert(error.message)
        }

        if(res){
            alert("Register of your account is Successful")
        }
    }

    return (
        <div className='container w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center'>

            {/* Card */}

            <div className=" bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200 p-12 mb-10 mt-8">

                {/* Title */}

                <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Register your account in <span className="text-blue-700">Dragon News</span>
                </h2>

                <p className="text-center text-sm text-gray-500 mb-8 mt-3">
                    Welcome back! Please enter your details.
                </p>

                {/* Form */}

                <form
                    onSubmit={handleSubmit(handleRegisterFunc)}
                    className="space-y-5 border-t-2 border-gray-200 pt-8">

                    {/* Name */}

                    <div>
                        <label className="text-lg font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className='mt-2 text-xs font-medium tracking-wide text-red-500'>{errors.name.message}</p>}
                    </div>

                    {/* Photo */}

                    <div>
                        <label className="text-lg font-semibold text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo (300/300 px)"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                            {...register("photo", { required: "Photo field is required" })}
                        />
                        {errors.photo && <p className='mt-2 text-xs font-medium tracking-wide text-red-500'>{errors.photo.message}</p>}
                    </div>

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

                    <div>
                        <label className="text-lg font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="bg-[#F3F3F3] mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='mt-2 text-xs font-medium tracking-wide text-red-500'>{errors.password.message}</p>}
                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        className="w-full mt-2 py-3 rounded-lg bg-[#403F3F] text-white font-bold hover:bg-blue-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md cursor-pointer"
                    >
                        Register
                    </button>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;