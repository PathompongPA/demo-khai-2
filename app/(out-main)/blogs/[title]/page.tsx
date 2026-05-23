import Nav from "@/components/navbar/nav.component";
import { getData } from "@/utils/directus.skd";

export default async function Page({ params }: {
    params: Promise<{ title: string }>,
}) {
    const { title } = await params;
    const [blog] = await getData("blogs", {
        filter: {
            id: {
                _eq: title
            }
        }
    })
    const segments = [
        "blogs",
        title
    ];

    return (
        <div>
            <Nav segments={segments} />
            {blog?.test && <div className="" dangerouslySetInnerHTML={{ __html: blog?.test }}></div>}
        </div>
    )
};
