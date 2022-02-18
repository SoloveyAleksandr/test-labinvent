import Icon from '../Image/Icon';
import styles from './Btn_small.module.css';

function Btn_small({
    icon,
    handleClick,
}) {
    return (
        <button
            onClick={handleClick}
            className={styles.btn_small}>
            {icon}
        </button>
    );
}

export default Btn_small;
