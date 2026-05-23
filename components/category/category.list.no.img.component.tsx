import { getData } from "@/utils/directus.skd"
import Button from "../button/button.component"
import { Suspense } from "react"
import Loading from "../loading/loading.component"

export default async function CategoryListNoImage() {
    const category = await getData("category", {})
    const CategoryList = category.map(({ id, name, name_en }) => {
        const url = `/products/${name_en}`
        return <Button link={url} query="all" key={id} > {name}</Button>
    }
    )
    return (
        <div className=" flex  gap-2  border w-full *:w-fit" id="product">
            <Suspense fallback={<Loading />}>
                {CategoryList}
            </Suspense>
        </div>
    )
};
