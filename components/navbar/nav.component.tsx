import Link from "next/link";

export default function Nav({ segments }: { segments: string[] }) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm"
        >
            <Link href="/">Home</Link>

            {segments?.map((segment, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/");

                const isLast = index === segments.length - 1;

                return (
                    <div key={href} className="flex items-center gap-2">
                        <span>/</span>

                        {isLast ? (
                            <span className="font-medium">
                                {decodeURIComponent(segment)}
                            </span>
                        ) : (
                            <Link href={href}>
                                {decodeURIComponent(segment)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    )
};
