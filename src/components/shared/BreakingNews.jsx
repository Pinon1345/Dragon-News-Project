import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    {
        "id": 1,
        "title": "Match Highlights: Germany vs Spain — as it happened",
        "category": "sports",
        "priority": "breaking"
    },
    {
        "id": 2,
        "title": "Breaking: Global Markets Surge as Tech Stocks Rally",
        "category": "business",
        "priority": "breaking"
    },
    {
        "id": 3,
        "title": "Dragon News Launches AI-Powered News Platform",
        "category": "technology",
        "priority": "featured"
    },
    {
        "id": 4,
        "title": "Bangladesh Cricket Team Announces Squad for Upcoming Series",
        "category": "sports",
        "priority": "normal"
    },
    {
        "id": 5,
        "title": "Heavy Rain Warning Issued for Coastal Regions",
        "category": "weather",
        "priority": "alert"
    },
    {
        "id": 6,
        "title": "UEFA Champions League: Last-Minute Goal Shock Victory",
        "category": "sports",
        "priority": "breaking"
    },
    {
        "id": 7,
        "title": "Global Leaders Meet for Climate Action Summit",
        "category": "world",
        "priority": "featured"
    },
    {
        "id": 8,
        "title": "New Smartphone Breaks Performance Records in Benchmark Tests",
        "category": "technology",
        "priority": "normal"
    },
    {
        "id": 9,
        "title": "Startup Funding Hits Record High This Quarter",
        "category": "business",
        "priority": "normal"
    },
    {
        "id": 10,
        "title": "Exclusive: Inside the Future of Artificial Intelligence",
        "category": "technology",
        "priority": "breaking"
    },
    {
        "id": 11,
        "title": "Health Experts Reveal New Heart Disease Prevention Study",
        "category": "health",
        "priority": "normal"
    },
    {
        "id": 12,
        "title": "Entertainment: Award-Winning Film Breaks Box Office Records",
        "category": "entertainment",
        "priority": "featured"
    },
    {
        "id": 13,
        "title": "Education: Universities Expand Scholarship Opportunities",
        "category": "education",
        "priority": "normal"
    },
    {
        "id": 14,
        "title": "Live Updates: Election Results Continue to Roll In",
        "category": "politics",
        "priority": "breaking"
    },
    {
        "id": 15,
        "title": "Space Discovery: Astronomers Detect Rare Cosmic Signal",
        "category": "science",
        "priority": "featured"
    }
];

const BreakingNews = () => {
    return (
        <div className='bg-[#F3F3F3] container w-11/12 mx-auto border-4 border-gray-100 shadow-md px-4 py-2 rounded-xl flex md:flex-row flex-col gap-3 items-center mb-4'>
            <div>
                <button className='btn btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-500 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-red-600'>Latest</button>
            </div>
            <Marquee pauseOnHover ={true} speed={40}>
                {
                    news.map(n => {
                        return <span key={n.id} className='mx-4'>
                            {n.priority === "breaking" ? "🔴 BREAKING:" : "📰"} {n.title}
                        </span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;