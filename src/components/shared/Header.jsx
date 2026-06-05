import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='container w-11/12 mx-auto space-y-2'>
            <div className='flex flex-col items-center gap-3 mt-8 mb-2'>
                <Image
                    src={logo}
                    alt='Header Logo'
                    width={450}
                    height={400}
                ></Image>
                <p className='text-lg font-semibold text-gray-400 pt-2'>Journalism Without Fear or Favour</p>
                <h2 className='text-xl font-semibold'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</h2>

                {/* another part */}

                <div>

                </div>
            </div>
        </div>
    );
};

export default Header;