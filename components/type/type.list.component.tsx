import { getData } from "@/utils/directus.skd"
import CardType from "./type.card.component"

export default async function TypeList() {
    const type = await getData("type", {})
    const ListType = type?.map(({ id, name, img }, index) =>
        <CardType key={id} id={id} name={name} img={img} />
    )
    return (
        <div className="">
            {ListType}
        </div>
    )
};
