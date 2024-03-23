import { IconArrowDownRight, IconArrowMoveRight } from "@tabler/icons-react";
import Image, { type StaticImageData } from "next/image";
import { type HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type SectionCardProps = HTMLProps<HTMLDivElement> & {
    onSeeMoreClick?: () => void;
};
type SectionCardImageProps = {
    src: string | StaticImageData;
    alt: string;
};
type SectionCardBodyProps = HTMLProps<HTMLDivElement>;
type SectionCardTitleProps = HTMLProps<HTMLHeadingElement>;
type SectionCardTextProps = HTMLProps<HTMLParagraphElement>;
type SectionCardFooterProps = HTMLProps<HTMLDivElement>;
type SectionCardDateRangeProps = {
    startDate: Date;
    endDate?: Date;
};

export function SectionCard({
    children,
    className,
    ...props
}: SectionCardProps) {
    return (
        <article
            className={twMerge(
                "rounded-[1.25rem] bg-white shadow-lg dark:bg-neutral-800",
                className,
            )}
            {...props}
        >
            <div className="flex">{children}</div>
        </article>
    );
}

export function SectionCardImage({ alt, src }: SectionCardImageProps) {
    return (
        <div className="p-2">
            <Image
                alt={alt}
                className="rounded-xl bg-neutral-100 object-cover object-center shadow dark:bg-neutral-900"
                height={84}
                src={src}
                width={84}
            />
        </div>
    );
}

export function SectionCardBody({ className, ...props }: SectionCardBodyProps) {
    return (
        <div
            className={twMerge(
                "flex flex-1 flex-col gap-1 p-2 text-neutral-800 dark:text-neutral-200",
                className,
            )}
            {...props}
        />
    );
}

export function SectionCardTitle({
    className,
    ...props
}: SectionCardTitleProps) {
    return (
        <header
            className={twMerge(
                "font-display text-base font-medium leading-5 text-black dark:text-white",
                className,
            )}
            {...props}
        />
    );
}

export function SectionCardText({ className, ...props }: SectionCardTextProps) {
    return (
        <p className={twMerge("text-base leading-5", className)} {...props} />
    );
}

export function SectionCardFooter({
    className,
    children,
    ...props
}: SectionCardFooterProps) {
    return (
        <footer
            className={twMerge("flex flex-1 items-end gap-2", className)}
            {...props}
        >
            {children}
            <button className="flex items-center gap-1 text-xs font-semibold text-blue-500">
                <span>Ver mais</span>
                <IconArrowDownRight size={16} />
            </button>
        </footer>
    );
}

export function SectionCardDateRange({
    startDate,
    endDate,
}: SectionCardDateRangeProps) {
    return (
        <p className="flex flex-1 items-center gap-1 text-xs leading-5">
            <span>{dateFormatter.format(startDate)}</span>
            <IconArrowMoveRight size={16} strokeWidth={1} />
            <span>{endDate ? dateFormatter.format(endDate) : "Atual"}</span>
        </p>
    );
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    month: "2-digit",
    year: "2-digit",
});
