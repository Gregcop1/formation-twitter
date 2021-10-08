import Link from "next/link";
import Icon from "../medias/Icon";

interface NavItemProps {
    href: string;
    icon: string;
    label: string;
}

const NavItem = ({ href, icon, label }: NavItemProps) => (
    <li>
        <Link href={href}>
            <a><Icon name={icon} />{label}</a>
        </Link>
    </li>
)

export default NavItem