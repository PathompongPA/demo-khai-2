import Link from "next/link"

export default function Page() {
    return (
        <div className=" flex flex-col gap-4 justify-center items-center w-screen h-screen ">
            <h1>Not found page.</h1>
            <Link href={"/"}>Go back to web site</Link>
        </div>
    )

};
