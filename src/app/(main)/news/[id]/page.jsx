import RightSideBar from '@/components/homePage/news/RightSideBar';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { id } = await params
    const news = await getNewsDetailsById(id)
    console.log("Meta Params", news);

    return {
        title: news.title,
        description: news.details,
    }

}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    console.log("News Details Params", id);
    const news = await getNewsDetailsById(id)
    console.log("News Details ID", news);
    return (
        <div className='container w-11/12 mx-auto my-12 grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6'>
            <div className="sm:col-span-3 md:col-span-6 lg:col-span-9 text-center p-4">
                <h2 className='font-bold text-2xl text-start mb-8'>Dragon News</h2>

                {/* Card */}

                <div className="card bg-base-100 border-4 border-slate-100 shadow-md shadow-neutral-300 rounded-xl">
                    <div>

                        <div className='card-body'>

                            <Image
                                className='w-full mx-auto bg-container bg-no-repeat bg-center mt-3 mb-8 rounded-xl'
                                src={news.image_url}
                                alt={news.title}
                                width={400}
                                height={500}
                            >
                            </Image>

                            <h2 className="card-title font-bold text-2xl mb-4">{news.title}</h2>

                            <p className='text-lg text-gray-700 text-justify'>{news.details}</p>

                            {/* Button */}

                            <div className='flex items-center justify-items-start mt-6 mb-2'>

                                <Link href={`/category/${news.category_id}`}>

                                    <button className='btn bg-[#D72050] text-white font-semibold text-lg rounded-lg py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#B81C45]'><FaArrowLeft></FaArrowLeft> All news in this category</button>

                                </Link>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <RightSideBar></RightSideBar>

        </div>
    );
};

export default NewsDetailsPage;