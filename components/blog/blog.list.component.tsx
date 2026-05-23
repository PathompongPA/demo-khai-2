import { getData } from "@/utils/directus.skd"
import BlogCard from "./blog.card.component"
import Link from "next/link"
import { Suspense } from "react"
import Button from "../button/button.component"

export default async function BlogList() {
    const blogs = await getData("blogs", {})

    const BlogList = blogs.map(({ id, title, subtitle, img }) => <BlogCard key={id} id={id} title={title} img={img} subtitle={subtitle} />)
    return (
        <div className=" bg-white  flex flex-col items-center w-full">
            <div className="  flex flex-col p-16 gap-8 max-w-7xl w-full">
                <div className="flex justify-between">
                    <h1>บทความที่หน้าสนใจ</h1>
                    <button>
                        <Button link="/products/" >
                            บทความอื่นๆ
                        </Button>
                    </button>
                </div>
                <Suspense >
                    <div className="grid grid-cols-4 gap-4">
                        {BlogList}
                    </div>
                </Suspense>
            </div>
        </div>
    )



};
