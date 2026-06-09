"use client";

import React from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaGoogle, FaInstagramSquare } from 'react-icons/fa';
import imageOne from "@/assets/swimming.png";
import imageTwo from "@/assets/class.png";
import imageThree from "@/assets/playground.png";
import Image from 'next/image';
import imageBg from "@/assets/bg.png";
import { authClient } from '@/lib/auth-client';

const RightSideBar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log("Google Signin", data);
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        });

        console.log("Github Signin", data);
    }

    return (
        <div className='sm:col-span-1 md:col-span-2 lg:col-span-3'>

            {/* First Part */}

            <h2 className='font-bold text-xl text-center mb-4'>Login With</h2>
            <div className='flex flex-col items-center gap-4'>
                <div className='text-blue-400 font-semibold flex flex-row items-center gap-2'>
                    <FaGoogle className='w-6 h-6'></FaGoogle>
                    <button
                        onClick={handleGoogleSignIn}
                        className='btn btn-outline btn-info rounded-xl border-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-blue-600 hover:text-white cursor-pointer'
                    >
                        Login With Google
                    </button>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <AiFillGithub className='w-7 h-7'></AiFillGithub>
                    <button
                        onClick={handleGithubSignIn}
                        className='btn btn-outline rounded-xl border-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-slate-600 hover:text-white cursor-pointer'
                    >
                        Login With Github
                    </button>
                </div>
            </div>

            {/* Second Part */}

            <h2 className='font-bold text-xl text-center mb-5 mt-8'>Find Us On</h2>
            <div className='flex flex-col items-center gap-2 border-2 border-gray-100 rounded-md p-2'>
                <div className='flex flex-row items-center border-2 border-gray-200 px-4 py-2 rounded-md w-full gap-4 text-gray-400'>
                    <FaFacebook className='w-7 h-7'></FaFacebook>
                    <h2 className='font-semibold text-xl'>Facebook</h2>
                </div>
                <div className='flex flex-row items-center border-2 border-gray-200 px-4 py-2 rounded-md w-full gap-4 text-gray-400'>
                    <AiFillTwitterCircle className='w-7 h-7'></AiFillTwitterCircle>
                    <h2 className='font-semibold text-xl'>Twitter</h2>
                </div>
                <div className='flex flex-row items-center border-2 border-gray-200 px-4 py-2 rounded-md w-full gap-4 text-gray-400'>
                    <FaInstagramSquare className='w-7 h-7'></FaInstagramSquare>
                    <h2 className='font-semibold text-xl'>Instagram</h2>
                </div>
            </div>

            {/* Third Part */}

            <div className='bg-[#F3F3F3] p-4 rounded-sm mt-8 mb-4'>
                <h2 className='font-bold text-xl'>Q-Zone</h2>
                <div className='flex flex-col items-center gap-8 mt-6 mb-8'>

                    <Image
                        src={imageOne}
                        alt='SwimmingPool Image'
                        width={400}
                        height={400}
                    ></Image>

                    <Image
                        src={imageTwo}
                        alt='Class Image'
                        width={400}
                        height={400}
                    ></Image>

                    <Image
                        src={imageThree}
                        alt='Playground Image'
                        width={400}
                        height={400}
                    ></Image>

                </div>

            </div>

            {/* Fourth Part */}

            <div className='flex flex-col mx-auto max-w-fit items-center px-2 py-2 mt-6 mb-6'>
                <Image
                    className='border-2 border-slate-100 shadow-xl shadow-gray-200 rounded-lg'
                    src={imageBg}
                    alt='Bottom Background'
                    width={400}
                    height={600}
                >
                </Image>

            </div>

        </div>
    );
};

export default RightSideBar;