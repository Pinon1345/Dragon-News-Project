


export async function getCategories() {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json()
    return data.data

}

export async function getNewsByCategoryId(category_id) {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await response.json()
    return data.data

}


export async function getNewsDetailsById(news_id) {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
    const data = await response.json()
    return data.data[0]
}