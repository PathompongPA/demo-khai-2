import Image from "next/image";
import Link from "next/link";
type prop = {
    id: string,
    img: string,
    title: string,
    subtitle: string
}

export default function BlogCard({ id, img, title, subtitle }: prop) {
    const href = `/blogs/${id}`
    const imageUrl = process.env.API_URL + "assets/" + img
    const imageName = `image-blog-${title}`
    return (
        <Link href={href} className="aspect-square relative max-w-75 border flex flex-col gap-4 justify-center items-center rounded-t-xl overflow-hidden border-b-orange-1 border-b-10">
            <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-black/50"></div>
                <Image src={imageUrl} alt={imageName} width={0} height={0} className=" border w-full aspect-square   object-cover" unoptimized />
            </div>
            <div className="absolute bottom-4 w-[80%] flex flex-col *:font-semibold *:text-end gap-4 ">
                <span className="text-xl text-white underline">{title}</span>
                <span className="  text-gray-3 truncate text-1">{subtitle}</span>
            </div>
        </Link>
    )
};
