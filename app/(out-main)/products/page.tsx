import CategoryListNoImage from "@/components/category/category.list.no.img.component";
import { getData } from "@/utils/directus.skd";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const category = await getData("category", {})
    const CategoryList = category.map(({ id, name, img }) => {
        const url = process.env.API_URL + "assets/" + img
        console.log("url", url);
        return (
            <Link key={id} href={`/product/${name}`}>
                {name}
                <Image src={url} alt="" width={100} height={100} unoptimized />
            </Link>
        )
    }
    )
    return (
        <div className="flex gap-8 p-8 w-full max-w-7xl flex-col justify-center items-center ">
            <CategoryListNoImage />
        </div>
    );
}
