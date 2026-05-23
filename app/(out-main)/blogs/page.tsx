import BlogCard from "@/components/blog/blog.card.component"
import { getData } from "@/utils/directus.skd"

export default async function Page() {
    const blogs = await getData("blogs", {})

    const BlogList = blogs.map(({ id, title, img, subtitle }) => <BlogCard key={id} id={id} title={title} img={img} subtitle={subtitle} />)
    return (
        <div className=" flex flex-col gap-8 p-8 w-full">
            <h1>บทความทั้งหมด</h1>
            <div className=" flex gap-8">
                {BlogList}
            </div>
        </div>
    )
};
