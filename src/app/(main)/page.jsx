import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import RightSideBar from "@/components/homePage/news/RightSideBar";
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

      <LeftSideBar categories={categories} activeId={null}></LeftSideBar>

      <div className="font-bold text-3xl bg-blue-100 sm:col-span-2 md:col-span-4 lg:col-span-6">
        Dragon News Home
      </div>

      <RightSideBar></RightSideBar>

    </div>
  );
}
