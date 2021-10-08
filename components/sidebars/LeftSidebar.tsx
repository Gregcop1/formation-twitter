import NavItem from "../navigation/NavItem";
import styles from "./LeftSidebar.module.css";

const items = [
    {label: 'Accueil', icon: 'home', href:'/'},
    {label: 'Explorer', icon: 'hashtag', href:'/explorer'},
    {label: 'Notification', icon: 'bell', href:'/'},
    {label: 'Profile', icon: 'user', href:'/profile'},
];

const LeftSidebar = () => {

    return (
        <aside className="sidebar-left">
            <nav>
                <ul className={styles.list}>
                    {items.map(({ label, href, icon }) => (
                        <NavItem key={label} href={href} icon={icon} label={label} />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default LeftSidebar;