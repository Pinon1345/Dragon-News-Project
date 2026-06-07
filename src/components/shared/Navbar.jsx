import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png";
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container w-11/12 mx-auto flex justify-between items-center gap-4 py-4'>
            <div></div>
            <ul className='flex justify-center items-center gap-4 text-lg text-gray-500'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className='flex md:flex-row flex-col items-center gap-3'>
                <Image
                    src={userAvatar}
                    alt='User Avatar'
                    width={40}
                    height={40}
                >
                </Image>
                <button
                    className='btn btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-black text-white px-5 py-2 rounded-md font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-purple-600'>
                    <Link href={"/login"}>
                        Login
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;