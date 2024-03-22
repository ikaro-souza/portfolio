import { type Icon } from "@tabler/icons-react";

type SocialItemProps = {
    Icon: Icon;
    label: string;
    url: string;
};

export function SocialItem({ Icon, label, url }: SocialItemProps) {
    return (
        <a
            href={url}
            target="_blank"
            className="flex items-center gap-2 font-medium"
        >
            <Icon size={24} />
            <span>{label}</span>
        </a>
    );
}
