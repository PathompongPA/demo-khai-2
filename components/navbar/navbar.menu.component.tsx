import Link from "next/link"

type prop = {
    link?: string
    title: string
    target_id?: string
}
export default function NavbarMenu({ link, title, target_id }: prop) {
    return (
        <Link className=" font-semibold text-1"
            href={{
                pathname: link || "/",
                hash: target_id
            }}
        >
            {title}
        </Link>
    )
};
