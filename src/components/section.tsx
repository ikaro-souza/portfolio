import { type HTMLProps, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Section({
    className,
    children,
    ...props
}: HTMLProps<HTMLDivElement>) {
    return (
        <section
            className={twMerge("flex flex-col gap-8", className)}
            {...props}
        >
            {children}
        </section>
    );
}

export function SectionTitle({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <h2
            className={twMerge(
                "font-display text-xl font-bold tracking-wide",
                className,
            )}
        >
            {children}
        </h2>
    );
}
