import LeftSideBar from '@/components/homePage/news/LeftSideBar';
import NewsCard from '@/components/homePage/news/NewsCard';
import RightSideBar from '@/components/homePage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';
import { PiSmileySadBold } from 'react-icons/pi';


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params
    console.log("Hello Everyone", id);

    const categories = await getCategories()

    const news = await getNewsByCategoryId(id)

    return (
        <div className="container w-11/12 mx-auto grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 my-15">

            <LeftSideBar categories={categories} activeId={id}></LeftSideBar>

            <div className="sm:col-span-2 md:col-span-4 lg:col-span-6 text-center">

                <h2 className='font-bold text-2xl text-center mb-4'>Dragon News Home</h2>

                <div className="space-y-6 mt-6">

                    {
                        news.length > 0 ?
                            news.map(n => {
                                return (

                                    <NewsCard
                                        key={n._id}
                                        news={n}
                                    >
                                    </NewsCard>

                                )

                            })
                            : <div className='my-16 space-y-4 flex flex-col items-center text-gray-400'>
                                <PiSmileySadBold className='w-10 h-10'></PiSmileySadBold>
                                <h2 className='font-bold text-2xl text-center'>NO NEWS FOUND!</h2>
                            </div>
                    }

                </div>

            </div>

            <RightSideBar></RightSideBar>

        </div>
    );
};

export default NewsCategoryPage;