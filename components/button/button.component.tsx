import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ReactNode } from "react";
const style = cva("p-2 rounded-lg font-semibold text-1 text-nowrap ", {
    variants: {
        variant: {
            primary: " bg-orange-1 text-white",
            secondary: ""
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

type props = {
    children: ReactNode;
    link: string;
    query?: string
}
    & VariantProps<typeof style>;

export default function Button({ children, link, variant, query }: props) {
    return (<Link className={style({ variant })} href={{
        pathname: link,
        query: { type: query }
    }} >{children}</Link>)
};
