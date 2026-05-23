import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import Reveal from "../animation/reveal.component"

type prop = {
    id: string,
    name: string,
    name_en: string,
    img: string,
    className?: string

}

export default function CategoryCard({ id, name, img, name_en, className }: prop) {
    const url = process.env.API_URL + "assets/" + img
    return (
        <Link
            key={id}
            href={{
                pathname: "/products/" + name_en,
                query: {
                    type: "all"
                }
            }}
            className={`relative h-full flex justify-center p-2 items-center flex-col rounded-2xl font-bold bg-white text-gray-700  ${className} `}
        >
            <Suspense>
                <Image className="aspect-square z-0 w-[60%] object-cover" src={url} alt="" width={0} height={0} unoptimized blurDataURL={"blur"} />
            </Suspense>
            <div className=" z-10 *:text-center *:text-nowrap *:truncate">
                <div className=""> {name} </div>
                <div className=" text-orange-1 text-nowrap">{name_en}</div>
            </div>
        </Link>
    )

};
