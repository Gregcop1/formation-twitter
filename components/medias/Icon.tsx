import styles from './Icon.module.css';

interface IconProps {
    name: string
}

const Icon = ({ name }: IconProps) => (
    <i className={`fa fa-${name} ${styles.icon}`} />
);

export default Icon;