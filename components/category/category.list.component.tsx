import { getData } from "@/utils/directus.skd";
import { Suspense } from "react";
import Loading from "../loading/loading.component";
import CategoryCard from "./category.card.component";
import Button from "../button/button.component";
import Reveal from "../animation/reveal.component";

export default async function CategoryList() {
    const category = await getData("category", { sort: ["index"] })
    return (
        <div className=" flex flex-col  h-fit gap-8 p-16 max-w-7xl w-full *:w-full " id="product">
            <div className=" flex justify-between">
                <Reveal type={"fade-up"} >
                    <h1 className="text-gray-5">ครบทุกหมวดอุปกรณ์อุตสาหกรรม</h1>
                </Reveal>
                <Reveal type={"fade-up"} >
                    <Button link="/products" query="" >ทั้งหมด</Button>
                </Reveal>
            </div>
            <Suspense fallback={<Loading />}>
                <Reveal type={"fade-up"} delay={"1"}>
                    <div className="grid grid-cols-12 gap-4 h-125  ">
                        {/* ตัวแรกใหญ่ */}
                        {category[0] && (
                            <CategoryCard
                                id={category[0].id}
                                name={category[0].name}
                                name_en={category[0].name_en}
                                img={category[0].img}
                                className="col-span-6 row-span-2 text-3xl"
                                key={category[0].id}
                            />
                        )}
                        {/* ที่เหลือเป็น grid */}
                        <div className="col-span-6 row-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                            {category.slice(1, 5).map(({ id, name, img, name_en }) => (
                                <CategoryCard
                                    id={id}
                                    name={name}
                                    name_en={name_en}
                                    img={img}
                                    key={id}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Suspense>
        </div>
    )

};
