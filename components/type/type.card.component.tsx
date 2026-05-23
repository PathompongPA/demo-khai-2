import Button from "../button/button.component"

type props = {
    id: string,
    name: string,
    img: string
}
export default function CardType({ id, name, img }: props) {
    return (
        <div className=" p-4">
            <Button link={name}>{name}</Button>
        </div>
    )
};
