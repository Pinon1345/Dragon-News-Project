import Image from 'next/image';
import React from 'react';
import { MdOutlineBookmarks, MdRemoveRedEye } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import StarImg from "@/assets/star.png";
import Link from 'next/link';

const NewsCard = ({ news }) => {

    console.log("News Card Data", news);

    return (
        <div className="card bg-base-100 border-4 border-slate-100 shadow-md shadow-neutral-300 rounded-xl">
            <div>
                {/* Author Info */}
                <div className='flex justify-between gap-4 items-center bg-zinc-50 p-6 rounded-lg'>
                    <div className='flex flex-row gap-3 items-center'>

                        <Image
                            src={news.author?.img}
                            alt={news.title}
                            width={50}
                            height={50}
                        ></Image>
                        <div>
                            <h2 className='font-bold text-xl'>{news.author?.name}</h2>
                            <p className='font-semibold text-sm text-gray-400'>{news.author?.published_date}</p>
                        </div>
                    </div>

                    <div className='text-gray-400 flex flex-row gap-4 items-center'>
                        <MdOutlineBookmarks className='w-5 h-5'></MdOutlineBookmarks>
                        <IoShareSocialOutline className='w-5 h-5'></IoShareSocialOutline>
                    </div>

                </div>

                <div className='card-body'>

                    <h2 className="card-title font-bold text-2xl">{news.title}</h2>

                    <Image
                        className='w-full mx-auto bg-container bg-no-repeat bg-center mt-3 mb-6 rounded-xl'
                        src={news.image_url}
                        alt={news.title}
                        width={400}
                        height={400}
                    >
                    </Image>

                    <p className='text-lg text-gray-700 text-justify line-clamp-4'>{news.details}</p>
                    
                    <Link href={`/news/${news._id}`}>
                        <p className='text-lg font-semibold text-yellow-400 text-start'>Read More</p>
                    </Link>

                    <div className='border-t-2 border-gray-200 mt-4'>
                        <p className='badge badge-soft badge-success text-lg font-semibold py-3.5 rounded-xl my-4'>{news.rating?.badge}</p>
                        <div className='flex justify-between items-center gap-4'>

                            <div className='flex items-center gap-2'>
                                <Image
                                    src={StarImg}
                                    alt='Star Image'
                                    width={18}
                                    height={18}
                                ></Image>
                                <p className='text-lg font-semibold text-gray-500'>{news.rating?.number}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdRemoveRedEye className='w-5 h-5 text-gray-500'></MdRemoveRedEye>
                                <p className='text-lg font-semibold text-gray-500'>{news.total_view}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NewsCard;







// <div className="bg-zinc-50 p-6 rounded-xl border-4 border-slate-100 shadow-md shadow-neutral-300 text-lg">
//     {news.title}

// </div>