import Image from "next/image";

async function getCategories() {
  const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await response.json()
  return data.data

}

export default async function Home() {
  const categories = await getCategories()
  console.log("Get all categories data", categories.news_category);
  return (
    <div className="container w-11/12 mx-auto grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 my-15">

      <div className=" sm:col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl text-center mb-6">All Categories</h2>

        <ul className="flex flex-col gap-4 mt-4">
          {
            categories.news_category.map(category => {
              return <li
                key={category.category_id}
                className="bg-slate-100 p-2 rounded-2xl font-bold text-lg text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-slate-600 hover:text-white cursor-pointer" >
                {category.category_name}
              </li>
            })
          }
        </ul>


      </div>

      <div className="font-bold text-3xl bg-blue-100 sm:col-span-2 md:col-span-4 lg:col-span-6">
        Dragon News Home
      </div>

      <div className="font-bold text-3xl bg-yellow-100 sm:col-span-1 md:col-span-2 lg:col-span-3">
        Social Media & Adds
      </div>

    </div>
  );
}
